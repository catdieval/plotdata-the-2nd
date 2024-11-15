import Navigation from "../Components/Navigation";

export default function Steps({
  onBack,
  onNext,
  onClickStepper,
  currentStep,
  clickedSteps,
  fileObject,
  onUploadFile,
  onConversion,
  keynames,
  vals,
  onSelectChartType,
  clickedChartType,
  onXChange,
  onYChange,
  xKey,
  yKey,
  onAssignVariables,
  xVariable,
  yVariable,
  settings,
  onSettingsChange,
}) {
  return (
    <>
      <Navigation
        onNext={onNext}
        onBack={onBack}
        onClickStepper={onClickStepper}
        currentStep={currentStep}
        fileObject={fileObject}
        onUploadFile={onUploadFile}
        onConversion={onConversion}
        onSelectChartType={onSelectChartType}
        clickedChartType={clickedChartType}
        onAssignVariables={onAssignVariables}
        onXChange={onXChange}
        onYChange={onYChange}
        xKey={xKey}
        yKey={yKey}
        xVariable={xVariable}
        yVariable={yVariable}
        settings={settings}
        onSettingsChange={onSettingsChange}
        keynames={keynames}
        vals={vals}
        clickedSteps={clickedSteps}
      />
    </>
  );
}
