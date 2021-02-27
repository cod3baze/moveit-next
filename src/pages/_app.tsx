// STATICs
import "../styles/Global.css";

// COMPONENTs
import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
