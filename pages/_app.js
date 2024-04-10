import GlobalStyle from "../styles";
import Layout from "../Components/Layout";
import { useState } from "react";
import CorrectArrays from "../Components/CorrectArrays";
import ConvertCSVToArray from "../Components/ConvertCSVToArray";

export default function App({ Component, pageProps }) {
  //Step 1: Upload CSV-file
  //State to store keys from the CSV file
  const [keynames, setKeynames] = useState([]);

  //State to store the values
  const [vals, setVals] = useState([]);

  // State to store the file object
  //const [fileObj, setFileObj] = useState({});
  const [fileObj, setFileObj] = useState(null);

  // Step 2: Choose chart type
  // State to store the selected chart type
  const [clickedChartType, setClickedChartType] = useState("");

  // Step 3: Choose variables
  // States to store the values of the x and y variables
  const [xVariable, setXVariable] = useState([]);
  const [yVariable, setYVariable] = useState([]);

  // States to store the values selected by the user in the dropdown menus for the x and y variables
  const [xKey, setXKey] = useState("");
  const [yKey, setYKey] = useState("");

  //Step 4: Labels to the axes:
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [hasCompletedStep4, setHasCompletedStep4] = useState(false);

  //Step 5: Add a title to the graph
  const [titleLabel, setTitleLabel] = useState("");
  const [hasCompletedStep5, setHasCompletedStep5] = useState(false);

  //Step 6: Plotting properties

  // Bar properties
  const [barColor, setBarColor] = useState("");

  //Line properties
  const [lineColor, setLineColor] = useState("");
  const [lineStyle, setLineStyle] = useState("");
  const [lineWidth, setLineWidth] = useState(0);

  // Marker Properties
  const [markerColor, setMarkerColor] = useState("");
  const [markerSymbol, setMarkerSymbol] = useState("");
  const [markerSize, setMarkerSize] = useState(0);

  //Layout Properties
  const initialGridProperties = {
    gridXAxis: "",
    gridYAxis: "",
    gridLineStyleXAxis: "",
    gridLineStyleYAxis: "",
  };
  const [grid, setGrid] = useState(initialGridProperties);

  function handleUploadFile(file) {
    setFileObj(file);
  }

  function handleConversion() {
    const reader = new FileReader();

    reader.onload = function (event) {
      const arrayOfObjects = ConvertCSVToArray(event.target.result, {
        separator: ",",
      });

      // The output of the convertCSVToArray function needs further processing
      const [keys, ...correctValues] = CorrectArrays(arrayOfObjects);

      setKeynames(keys);
      setVals(correctValues);
      alert("File processed successfully");
    };

    reader.readAsText(fileObj);
  }

  function handleSelectChartType(name) {
    setClickedChartType(name);
  }

  function handleXChange(event) {
    setXKey(event.target.value);
  }

  function handleYChange(event) {
    setYKey(event.target.value);
  }

  function handleAssignVariables() {
    if (vals.length > 0 && xKey !== "" && yKey !== "") {
      let tempXArray = new Array(vals.length);
      let tempYArray = new Array(vals.length);

      // In tempXArray fill in with the values associated to the key in vals
      // corresponding to the xKey value.
      // In tempYArray fill in with the values associated to the key in vals
      // corresponding to the yKey value.

      for (let i = 0; i < vals.length; i++) {
        for (let key in vals[i]) {
          if (key === xKey) {
            tempXArray[i] = vals[i][key];
          }
          if (key === yKey) {
            tempYArray[i] = vals[i][key];
          }
        }
      }

      setXVariable(tempXArray);
      setYVariable(tempYArray);
      alert("Data for the x and y variables are assigned.");
    }
  }

  function handleXLabelChange(event) {
    setXLabel(event.target.value);
  }

  function handleYLabelChange(event) {
    setYLabel(event.target.value);
  }

  function handleHasCompletedStep4() {
    alert("Labels for the x-axis and the y-axis of the graph are assigned");
    setHasCompletedStep4(true);
  }

  function handleTitleChange(event) {
    setTitleLabel(event.target.value);
  }

  function handleHasCompletedStep5() {
    alert("Title of the graph is assigned");
    setHasCompletedStep5(true);
  }

  function handleLineColorChange(event) {
    setLineColor(event.target.value);
  }

  function handleLineStyleChange(event) {
    setLineStyle(event.target.value);
  }

  function handleLineWidthChange(event) {
    setLineWidth(event.target.value);
  }

  function handleBarColorChange(event) {
    const choice = event.target.value;
    setBarColor(choice);
  }

  function handleMarkerColorChange(event) {
    setMarkerColor(event.target.value);
  }

  function handleMarkerSymbolChange(event) {
    setMarkerSymbol(event.target.value);
  }

  function handleMarkerSizeChange(event) {
    setMarkerSize(event.target.value);
  }

  function handleGridProperties(event) {
    setGrid({ ...grid, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          keynames={keynames}
          fileObj={fileObj}
          onUploadFile={handleUploadFile}
          onConversion={handleConversion}
          clickedChartType={clickedChartType}
          onSelectChartType={handleSelectChartType}
          xKey={xKey}
          yKey={yKey}
          xVariable={xVariable}
          yVariable={yVariable}
          onXChange={handleXChange}
          onYChange={handleYChange}
          onAssignVariables={handleAssignVariables}
          xLabel={xLabel}
          yLabel={yLabel}
          onXLabelChange={handleXLabelChange}
          onYLabelChange={handleYLabelChange}
          hasCompletedStep4={hasCompletedStep4}
          onHasCompletedStep4={handleHasCompletedStep4}
          titleLabel={titleLabel}
          onTitleChange={handleTitleChange}
          hasCompletedStep5={hasCompletedStep5}
          onHasCompletedStep5={handleHasCompletedStep5}
          barColor={barColor}
          onBarColorChange={handleBarColorChange}
          lineColor={lineColor}
          lineStyle={lineStyle}
          lineWidth={lineWidth}
          onLineColorChange={handleLineColorChange}
          onLineStyleChange={handleLineStyleChange}
          onLineWidthChange={handleLineWidthChange}
          markerColor={markerColor}
          markerSymbol={markerSymbol}
          markerSize={markerSize}
          onMarkerColorChange={handleMarkerColorChange}
          onMarkerSymbolChange={handleMarkerSymbolChange}
          onMarkerSizeChange={handleMarkerSizeChange}
          grid={grid}
          onGridChange={handleGridProperties}
        />
      </Layout>
    </>
  );
}
