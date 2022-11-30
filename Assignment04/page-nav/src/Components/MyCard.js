import { Card } from "antd";
import { propTypes } from "react-bootstrap/esm/Image";
export default function MyCard(props) {
  return (
    <Col className="gutter-row" xs={24} xl={8}>
      <Card
        title={props.title}
        extra={<a href="#">More</a>}
        style={{
          width: 300,
        }}
      >
        <p>{props.content}</p>
      </Card>
    </Col>
  );
}
