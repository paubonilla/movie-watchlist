import styled from 'styled-components'

export const ResultCardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const PosterWrapper = styled.div`
  img,
  .filler-poster {
    width: 75px;
    height: 113px;
    background-color: #dbdada;
    border-radius: 5px;
    margin-right: 15px;
    display: block;
    color: transparent;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-size: 1.25rem;
    color: var(--primary);
    font-weight: 600;
    margin: 0;
  }
  .release-date {
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--primary);
    margin: 0;
  }
`

export const Controls = styled.div`
  button {
    margin-right: 10px;
  }
`