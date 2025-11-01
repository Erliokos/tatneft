import Plot from 'react-plotly.js'
import { memo } from 'react'
import { useBreakpoint } from 'hooks/useBreakpoint';

type Point = { t: string; v: number }

type ChartProps = {
  series: Point[]
  units: string
}

export const Chart = memo(({ series, units }: ChartProps) => {
  const x = series.map(p => p.t)
  const y = series.map(p => p.v)


  const breakpoint = useBreakpoint()
  const fontSize = breakpoint === 'sm' ? 8 : breakpoint === 'md' ? 10 : 12

  return (
    <Plot
      data={[
        {
          x,
          y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { size: 4, color: '#2f6feb' },
          line: { color: '#2f6feb', width: 2 },
          hovertemplate: '%{x}<br>%{y:.1f} ' + units + '<extra></extra>'
        }
      ]}
      layout={{
        autosize: true,
        height: 360,
        margin: { l: fontSize * 5, r: 58, t: 16, b: fontSize * 5 },
        font: { size: fontSize },
        xaxis: {
          title: {
            text: 'Время',
            font: { size: fontSize, weight: 'bold' },
            standoff: fontSize
          },
          type: 'date',
          tickformat: '%d.%m %H:%M',
          tickfont: { size: fontSize },
          showgrid: true,
          gridcolor: '#f0f0f0'
        },
        yaxis: {
          title: {
            text: `Температура (${units})`,
            font: { size: fontSize, weight: 'bold' },
            standoff: fontSize
          },
          tickfont: { size: fontSize },
          zeroline: false,
          showgrid: true,
          gridcolor: '#f0f0f0'
        },
      }}
      config={{ responsive: true, displayModeBar: false }}
      style={{ width: '100%' }}
    />
  )
})
