import { Button, Container, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import getContent from "../service/users.service";
import { Navigate, useNavigate } from "react-router-dom";
import AboutTab from "./Tab";
import { useEffect, useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Classroom = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [ans, setAns] = useState("");
  // const [quiz, setQuiz] = useState([
  //   { question: "What is 2+2 ?", options: [0, 4, 6, 5], ans: 4, response: "" },
  //   {
  //     question: "What is 23+25 ?",
  //     options: [48, 45, 60, 44],
  //     ans: 48,
  //     response: "",
  //   },
  // ]);
  const [quiz, setQuiz] = useState([]);
  const [link, setLink] = useState("");

  useEffect(() => {
    async function getData() {
      getContent().then((response) => {
        console.log("data", response);
        setQuiz(response.questions);
        setLink(response.videoLink);
      });
    }
    getData();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const checkAns = (index) => {
    if (!ans.trim()) {
      return;
    }
    if (quiz[index].ans == ans) {
      console.log(ans);
      quiz[index].response = "Correct Ans";
      console.log(quiz);
      setQuiz(quiz);
    } else {
      quiz[index].response = "Incorrect Ans";
      console.log(quiz);
      setQuiz(quiz);
    }
    setAns("");
  };

  return (
    <>
      <InfiniteScroll
        dataLength={quiz.length}
        hasMore={false}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Container>
          <h1 style={{ textAlign: "center", margin: "20px" }}>
            Using place value to add 3-digit numbers: part 1
          </h1>
          <h6
            style={{ textAlign: "center", margin: "20px", fontFamily: "serif" }}
          >
            Google Classroom
          </h6>
        </Container>
        <div className="video-responsive">
          <iframe
            // src="https://www.youtube.com/embed/Wm0zq-NqEFs"
            src={link}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </div>
        <Container style={{ margin: "30px" }}>
          <Row>
            <Col></Col>
            <Col xs={8}>
              <AboutTab style={{ margin: "30px" }} name={"About"} />
              <div style={{ margin: "30px" }}>
                <p className="para">
                  Let's explore adding two 3-digit numbers using place value and
                  carrying. We walk through the process step by step, starting
                  with the ones place, then the tens place, and finally the
                  hundreds place. We emphasize the importance of understanding
                  what carrying means and how it relates to place value. Created
                  by Sal Khan.
                </p>
              </div>
            </Col>
            <Col></Col>
          </Row>

          {/* quiz */}
          <Row>
            <Col></Col>
            <Col xs={8}>
              <AboutTab style={{ margin: "30px" }} name={"Quiz"} />
              <div style={{ margin: "30px" }}>
                <ListGroup as="ol" numbered>
                  {quiz.map((data, index) => (
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{data.question}</div>

                        {data.options.map((options, oindex) => (
                          <>
                            <div>
                              <input
                                type="radio"
                                value={options}
                                name="option"
                                onChange={(e) => {
                                  setAns(e.target.value);
                                }}
                              />{" "}
                              {options}
                            </div>
                          </>
                        ))}
                        <Button
                          variant="info"
                          type="button"
                          onClick={() => {
                            checkAns(index);
                          }}
                        >
                          Submit
                        </Button>
                        {data.response == "Correct Ans" && (
                          <span style={{ color: "green" }}>
                            &nbsp; {data.response}
                          </span>
                        )}
                        {data.response == "Incorrect Ans" && (
                          <span style={{ color: "red" }}>
                            &nbsp; {data.response}
                          </span>
                        )}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col></Col>
          </Row>

          {/* video transcription */}
          <Row>
            <Col></Col>
            <Col xs={8}>
              <AboutTab
                style={{ margin: "30px" }}
                name={"Video transcript"}
                color={"black"}
              />
              <div style={{ margin: "30px" }}>
                <p
                  className="para"
                  style={{
                    overflowY: "scroll",
                    height: "210px",
                    overflowX: "auto",
                  }}
                >
                  Let's add 536 to 398. I'm going to do it two different ways so
                  that we really understand what this carrying is all about. So
                  first we'll do it in the more traditional way. We start in the
                  ones place. We say, well, what's 6 plus 8? Well, we know that
                  6 plus 8 is equal to 14. And so when we write it down here in
                  the sum, we could say, well, look, the four is in the ones
                  place, so it's equal to 4 plus one 10 So let's write that one
                  10 in the tens place. And now we focus on the tens place. We
                  have 1 ten, plus 3 tens, plus 9 tens. So what's that going to
                  get us? 1 plus 3 plus 9 is equal to 13. Now, we have to remind
                  ourselves, this is 13 tens. This is 13 tens. Or another way of
                  thinking about it, this is 3 tens. This is 3 tens and 100. You
                  might say, wait, wait. How does that make sense? Remember,
                  this is in the tens place. When we're adding a 1 ten plus the
                  3 tens plus 9 tens, we're actually adding 10 plus 30 plus 90,
                  and we're getting 130. And so we're putting the 30. The 3 in
                  the tens place represents the 30. So this is the 3. The 3
                  represents the 30. And then we're placing this 1 in the
                  hundreds place. 10 tens is equal to 100. And now we're adding
                  up the hundreds place. 1 plus 5 plus 3 is equal to-- let's
                  see, 1 plus 5 is equal to 6, plus 3 is equal to 9. But we have
                  to remind ourselves, this is 900. This is in the hundreds
                  place. So this is actually 100-- I want to make all colors the
                  same. So this is actually 100 plus 500 plus 300. Let me get
                  the color coding right. Plus 300 is equal to 900. And that's
                  exactly what we got here. 100 plus 500 plus 300 is equal to
                  900, and we're done. This is equal to 934.
                </p>
              </div>
              <hr />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </InfiniteScroll>
    </>
  );
};

export default Classroom;
