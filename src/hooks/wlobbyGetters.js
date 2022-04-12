import React, { useState } from "react";
import wlobby from "../api/wlobby";

export function getUsers() {
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const getUserData = async (userID) => {
    try {
      const response = await wlobby.get("/get/user/", {
        params: {
          UserID: userID,
        },
      });
      setUserData(response.data.Item);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  return [getUserData, userData, errorMessage];
}

export function getAdverts() {
  const [adverts, setAdverts] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const getAdvertData = async () => {
    try {
      const response = await wlobby.get("/get/adverts/");
      setAdverts(response.data.Items);
      setLoading(false);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  return [getAdvertData, adverts, errorMessage, loading];
}

export function getAdvertWithFilmID() {
  const [advert, setAdvert] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const getAdvertsWithFilmID = async (filmID) => {
    try {
      const response = await wlobby.get("get/adverts/with/filmid/", {
        params: {
          FilmID: filmID,
        },
      });
      setAdvert(response.data.Items);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  return [getAdvertsWithFilmID, advert, errorMessage];
}
