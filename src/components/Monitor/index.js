/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";
import theme from "../../styles/theme";
import {
  TemplateMonitor,
  MonitorGrid,
  TitleBox,
  ExplainedBox,
  ButtonChange,
} from "./styled";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const MonitorPage = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [states, setStates] = useState(0);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://embed-system-thariq.herokuapp.com/`,
          {
            cancelToken: source.token,
          }
        );
        setData(response.data.data.filteredData);
      } catch (e) {}
    };
    const fetchData2 = async () => {
      const response = await axios.get(
        `https://embed-system-thariq.herokuapp.com/jemuran`
      );
      setStates(response.data.state);
    };
    fetchData();
    fetchData2();
    setLabels(
      data.slice(data.length - 11, data.length).map((item) => {
        return moment(item.insertedAt).format("DD-MM-YYYY, h:mm:ss a");
      })
    );
    setDatasets([
      {
        label: "Temp",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.slice(data.length - 11, data.length).map((item) => {
          return item.suhu;
        }),
      },
    ]);
    return () => {
      source.cancel();
    };
  }, [data]);

  let lastDate = data.slice(data.length - 1, data.length).map((item) => {
    return new Date(item.insertedAt).getTime();
  });

  let diff = new Date().getTime() - lastDate[0];
  let minutes = Math.floor(diff / 1000 / 60);

  const ChangePosition = async () => {
    if (minutes <= 4) {
      let body = {
        state: "Masuk",
      };
      if (states == 0) {
        body = {
          state: "Keluar",
        };
        setStates(1);
      } else {
        body = {
          state: "Masuk",
        };
        setStates(0);
      }
      const response = await axios.post(
        `https://embed-system-thariq.herokuapp.com/jemuran`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    }
  };
  return (
    <TemplateMonitor>
      <MDBContainer>
        <h3
          style={{ margin: "50px auto 0", width: "100%", textAlign: "center" }}
        >
          Line Chart Data Raidigo
        </h3>
        <Line data={{ labels, datasets }} options={{ responsive: true }} />
      </MDBContainer>
      <h3 style={{ margin: "50px auto 0", width: "100%", textAlign: "center" }}>
        Last Data
      </h3>
      <MonitorGrid>
        <div style={{ width: "100%" }}>
          <TitleBox color={theme.color.blue.A900}>Temperature</TitleBox>
          <ExplainedBox color={theme.color.blue.A900}>
            {data.slice(data.length - 1, data.length).map((item) => {
              return item.suhu;
            })}
          </ExplainedBox>
        </div>
        <div style={{ width: "100%" }}>
          <TitleBox color={theme.color.red}>Humadity</TitleBox>
          <ExplainedBox color={theme.color.red}>
            {data.slice(data.length - 1, data.length).map((item) => {
              return item.hum;
            })}
          </ExplainedBox>
        </div>
        <div style={{ width: "100%" }}>
          <TitleBox color={theme.color.black.A500}>Rain Drop</TitleBox>
          <ExplainedBox color={theme.color.black.A500}>
            {data.slice(data.length - 1, data.length).map((item) => {
              return item.raindrop;
            })}
          </ExplainedBox>
        </div>
        <div style={{ width: "100%" }}>
          <TitleBox color={theme.color.green.A700}>Light</TitleBox>
          <ExplainedBox color={theme.color.green.A700}>
            {data.slice(data.length - 1, data.length).map((item) => {
              return item.cahaya;
            })}
          </ExplainedBox>
        </div>
      </MonitorGrid>
      <h3 style={{ margin: "50px auto 0", width: "100%", textAlign: "center" }}>
        Situation:{" "}
        <span style={{ color: theme.color.red }}>
          {data.slice(data.length - 1, data.length).map((item) => {
            return item.keterangan;
          })}
        </span>
      </h3>
      <h3 style={{ margin: "50px auto 0", width: "100%", textAlign: "center" }}>
        Device Status:{" "}
        <span style={{ color: theme.color.red }}>
          {minutes > 4 ? "OFF" : "ON"}
        </span>
      </h3>
      <h3 style={{ margin: "50px auto 0", width: "100%", textAlign: "center" }}>
        Last Clotheslines Position:{" "}
        <span style={{ color: theme.color.red }}>
          {states == 0 ? "IN" : "OUT"}
        </span>
      </h3>
      <ButtonChange
        onClick={ChangePosition}
        disabled={minutes > 4 ? true : false}
      >
        GO {states == 0 ? "OUT" : "IN"}
      </ButtonChange>
    </TemplateMonitor>
  );
};

export default MonitorPage;
