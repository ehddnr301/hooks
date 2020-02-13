import React, { useContext } from "react";
import { UserContext, LangContext, useSetLang, useT } from "./Context";

export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello")}</h1>
      <button onClick={() => setLang("kr")}>{t("Translate")}</button>
    </>
  );
};
