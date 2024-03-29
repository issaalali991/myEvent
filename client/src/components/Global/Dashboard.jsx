import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/MyEventContext";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { isLoggedIn, userData } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="mt-5 flex flex-col items-center justify-start pt-8 p-4 rounded-md  mx-auto max-w-md h-96 w-60">
      {/* <h3 className="text-2xl mb-6 underline">{t("Dashboard")}</h3> */}

      <div className="rounded-md shadow-md  max-w-md h-auto w-60 pb-2 fixed">
        <ul>
          {/* Buttons */}
          <li>
            <button
              className="btn menuBtn"
              onClick={() => navigate("/myevents")}
            >
              {t("Events")}
            </button>
          </li>
          <li>
            <button
              className="btn menuBtn"
              onClick={() => navigate("/home/contacts")}
            >
              {t("Contacts")}
            </button>
          </li>
          <li>
            <button
              className="btn menuBtn"
              onClick={() => navigate("/admin/templates")}
            >
              {t("Templates")}
            </button>
          </li>
          {isLoggedIn && userData.role === "admin" ? (
            <li>
              <button
                className="btn menuBtn"
                onClick={() => navigate("/gift/upload")}
              >
                {t("Upload Cards")}
              </button>
            </li>
          ) : (
            ""
          )}
          <li>
            <span className="vSpace">&nbsp;</span>
          </li>
          <li>
            <button
              className="btn menuBtn editBtn"
              onClick={() => navigate("/user/settings")}
            >
              {t("Settings")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
