import React from 'react';
import ReactChartkick, {  LineChart, AreaChart } from 'react-chartkick'
import Chart from "chart.js";
import { ResponsiveLine } from '@nivo/line'

function Graph(props) {
  if(props.data){
	  return (
	    <div style={{ height: 900 }} >
	    	<h1>Stock Graph</h1>
	    	<div style={{ height: 400 }} >
	    	<ResponsiveLine
		        data={props.data}
		        margin={{
		            "top": 50,
		            "right": 110,
		            "bottom": 50,
		            "left": 60
		        }}
		        xScale={{
		            "type": "point"
		        }}
		        yScale={{
		            "type": "linear",
		            "stacked": false,
		            "min": "auto",
		            "max": "auto"
		        }}
		        minY="auto"
		        maxY="auto"
		        stacked={true}
		        axisBottom={{
		            "orient": "bottom",
		            "tickSize": 1,
		            "tickPadding": 10,
		            "tickRotation": 90,
		            "legend": "Time",
		            "legendOffset": 60,
		            "legendPosition": "center"
		        }}
		        axisLeft={{
		            "orient": "left",
		            "tickSize": 5,
		            "tickPadding": 5,
		            "tickRotation": 0,
		            "legend": "Value in USD",
		            "legendOffset": -40,
		            "legendPosition": "center"
		        }}
		        dotSize={10}
		        dotColor="inherit:darker(0.3)"
		        dotBorderWidth={2}
		        dotBorderColor="#ffffff"
		        enableDotLabel={false}
		        dotLabel="y"
		        dotLabelYOffset={-12}
		        animate={true}
		        motionStiffness={90}
		        motionDamping={15}
		        legends={[
		            {
		                "anchor": "bottom-right",
		                "direction": "column",
		                "justify": false,
		                "translateX": 100,
		                "translateY": 0,
		                "itemsSpacing": 0,
		                "itemDirection": "left-to-right",
		                "itemWidth": 80,
		                "itemHeight": 20,
		                "itemOpacity": 0.75,
		                "symbolSize": 12,
		                "symbolShape": "circle",
		                "symbolBorderColor": "#008080",
		                "effects": [
		                    {
		                        "on": "hover",
		                        "style": {
		                            "itemBackground": "rgba(0, 0, 0, .03)",
		                            "itemOpacity": 1
		                        }
		                    }
		                ]
		            }
		        ]}
		    />
	    	</div>
	    </div>
	  );
  }

  return <div>No graph</div>
}

export default Graph;