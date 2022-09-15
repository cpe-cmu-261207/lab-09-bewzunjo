import Card from "../components/Card";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <>
          <p
            className="d-flex justify-content-center my-3 fs-1"
            style={{ fontFamily: "Staatliches", color: "rgb(142, 127, 35)" }}
          >
            My Profile
          </p>
          <img
            src="/pic.jpg"
            className="mx-auto mb-3 rounded-circle"
            style={{ width: "100px" }}
          />
          <p
            className="d-flex justify-content-center mb-1 fs-4"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            Saran Kimanuwat
          </p>
          <p
            className="d-flex justify-content-center mb-1 fs-5"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            ศรัณย์ กิมานุวัฒน์
          </p>
          <div
            className="mx-auto mb-1 fs-5"
            style={{ width: "50%", textAlign: "center" }}
          >
            <hr />
            <p
              className="fs-0"
              style={{ fontFamily: "Prompt", color: "rgb(87, 87, 87)" }}
            >
              Hi,My name is Saran.I study at Chiangmai University.Study Computer
              Engineering.I love programming.
            </p>
            <hr />
          </div>
        </>
        <div className="mx-auto mb-5" style={{ width: "60%" }}>
          <p
            className="mb-1 fs-4"
            style={{ fontFamily: "Prompt", color: "black" }}
          >
            My Skills
          </p>
          <Card
            imgsrc="/programing.png"
            title="Programing"
            text="I am interested in programming because it is a very demanding profession these days."
          />
          <Card
            imgsrc="/UXUI.png"
            title="UX UI"
            text="I am interested in programming because it is a very demanding profession these days."
          />
          
          <Card
            imgsrc="/devops.png"
            title="DEV OPS"
            text="I take care of application maintenance.I have fine Experience in both server and container based deployment."
          />
        </div>
      </MainLayout>
    </div>
  );
}