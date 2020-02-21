import styled from "@emotion/styled"
const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 960px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 720px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 540px;
  }
  @media (max-width: 576px) {
    max-width: 96%;
  }
`

export default Container
