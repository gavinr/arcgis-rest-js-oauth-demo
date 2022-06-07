// https://developers.arcgis.com/applications/4ddac6b970dd408081d348d0d2ad870e/
const CLIENT_ID = "WiVUfuC2NyQC06zA";

let opts = {
  clientId: CLIENT_ID,
  popup: false,
  redirectUri: window.location.href,
};

// After the user is redirected here, this will run
arcgisRest.ArcGISIdentityManager.completeOAuth2(opts)
  .then((newSession) => {
    console.log("DONE", newSession.username);
    resultsDomNode.innerHTML = newSession.serialize();
  })
  .catch((e) => {
    console.log("Note:", e);
    resultsDomNode.innerHTML = e;
  });

// When the login button is clicked, call beginOAuth2:
loginButton.addEventListener("click", () => {
  console.log("login button click");
  arcgisRest.ArcGISIdentityManager.beginOAuth2(opts)
    .then(() => {
      console.log("going....");
    })
    .catch((e) => {
      console.log("Error", e);
      resultsDomNode.innerHTML = e;
    });
});
