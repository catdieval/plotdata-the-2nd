import dynamic from 'next/dynamic';
const UploadData = dynamic(() => import("../UploadData"), {ssr: false})
import ListOfCharts from "../ListOfCharts";
import ChooseVariables from "../ChooseVariables";
import XandYLabelsGraph from "../XandYLabelsGraph";
import GraphTitle from "../GraphTitle";
import PlottingProperties from "../PlottingProperties";

export default function OneStepAtATime({
  currentStep,
  clickedSteps,
  id,
  onDisableNextButton,
  onNext,
  onBack,
  fileObject,
  onUploadFile,
  onConversion,
  keyNames,
  vals,
  onAssignVariables,
  clickedChartType,
  onSelectChartType,
  onXChange,
  onYChange,
  xKey,
  yKey,
  xVariable,
  yVariable,
  settings,
  onSettingsChange,
  hasNotEnteredBarProperties,
  hasNotEnteredLineProperties,
  hasNotEnteredMarkerProperties,
}) {  
  // Displays UploadData only when the current step is step 1 and nothing for the other steps
  if (currentStep === 1 && id === 1) {
    return (
      <UploadData
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        fileObject={fileObject}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
        keyNames={keyNames}
        vals={vals}
        currentStep={currentStep}
      />
    );
  } else if (currentStep === 2 && id === 2) {
    return (
      <ListOfCharts
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        onSelectChartType={onSelectChartType}
        clickedChartType={clickedChartType}
        hasNotEnteredBarProperties={hasNotEnteredBarProperties}
        hasNotEnteredLineProperties={hasNotEnteredLineProperties}
        hasNotEnteredMarkerProperties={hasNotEnteredMarkerProperties}
        clickedSteps={clickedSteps}
      />
    );
  } else if (currentStep === 3 && id === 3) {
    return (
      <ChooseVariables
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        keyNames={keyNames}
        onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        currentStep={currentStep}
      />
    );
  } else if (currentStep === 4 && id === 4) {
    return (
      <XandYLabelsGraph
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    );
  } else if (currentStep === 5 && id === 5) {
    return (
      <GraphTitle 
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        settings={settings} 
        onSettingsChange={onSettingsChange} 
      />
    );
  } else if (currentStep === 6 && id === 6) {
    return (
      <PlottingProperties
        onDisableNextButton={onDisableNextButton}
        onNext={onNext}
        onBack={onBack}
        clickedChartType={clickedChartType}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
    );
  }
}
