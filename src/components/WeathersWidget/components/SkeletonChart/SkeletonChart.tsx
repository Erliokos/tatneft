import styled, { keyframes } from "styled-components"

export const SkeletonChart = () => {
  return (
    <SkeletonWrapper>
      <ShimmerOverlay />
      <LoadingText>LOADING...</LoadingText>
    </SkeletonWrapper>
  )
}

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`

const SkeletonWrapper = styled.div`
  position: relative;
  height: 360px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fafafa;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ShimmerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #f6f6f6 25%,
    #ecebeb 50%,
    #f6f6f6 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.6s linear infinite;
  z-index: 0;
`

const LoadingText = styled.div`
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: 1.2rem;
  color: #888;
  letter-spacing: 2px;
  animation: ${pulse} 1.6s ease-in-out infinite;
  user-select: none;
`
