import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "../menu/Menu";

import AppForm from "../../components/app_form/AppForm";

import CryptoExample from "../../components/crypto_example/CryptoExample";

function RouteComponent() {
  return (
    <Routes>
      <Route exact path="/" component={<Menu />} />
      <Route path="/app-form" element={<AppForm />} />
      <Route path="/crypto_example" element={<CryptoExample />} />
    </Routes>
  );
}

export default RouteComponent;
