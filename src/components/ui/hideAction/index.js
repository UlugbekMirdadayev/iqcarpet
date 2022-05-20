import React from "react";
import {
  HideActionButton,
  HideActionStyled,
  HideActionText,
} from "./hideAction.styles";

export default function HideAction({
  hidden = "Скрыть",
  show = "Показатель не определен",
}) {
  const [hideAction, setHideAction] = React.useState(false);
  return (
    <HideActionStyled>
      {hideAction ? (
        <HideActionText>{hidden}</HideActionText>
      ) : (
        <HideActionText>{show}</HideActionText>
      )}
      <HideActionButton onClick={() => setHideAction(!hideAction)}>
        {hideAction ? "Показать" : "Скрыть"}
      </HideActionButton>
    </HideActionStyled>
  );
}
