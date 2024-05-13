// Components
import Link from "next/link";

export function Logo() {
  return (
    <div className="items-center gap-2 hidden md:flex">
      <svg
        fill="#f4f4f4"
        height="24px"
        width="24px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.001 512.001"
      >
        <g>
          <g>
            <path
              d="M512,286.181c0-25.883-19.466-47.575-45.279-50.458c-12.791-1.428-25.452-3.799-37.631-7.046
			c-47.174-12.581-175.441-69.322-213.63-86.413c-12.825-5.74-27.546-3.012-37.506,6.949l-44.676,44.676
			c-4.754,4.754-11.67,6.387-18.048,4.261l-50.225-16.742c-3.717-1.239-6.212-4.702-6.212-8.618v-4.776
			c0-9.136-7.432-16.568-16.568-16.568h-9.592c-13.228,0-24.24,10.342-25.07,23.542L0.048,294.51
			c-0.471,8.971,2.548,17.512,8.505,24.176v37.452c0,9.136,7.432,16.568,16.568,16.568h282.187
			c83.725,0,149.941-16.607,174.523-23.747c6.73-1.955,12.38-6.657,15.502-12.901l13.821-27.641
			c0.569-1.137,0.837-2.364,0.837-3.585h0.01v-18.651H512z M424.96,244.167c12.946,3.454,26.4,5.973,39.982,7.49
			c1.013,0.113,2.011,0.274,2.995,0.469c-2.903,0.94-6.21,1.95-9.989,3.013c-16.009,4.503-43.511,10.801-83.625,15.225
			c-6.915,0.762-13.305,3.531-18.477,8.005l-11.887,10.283c-0.584-0.187-1.194-0.316-1.831-0.366
			c-21.583-1.66-44.209-3.983-66.641-6.642l61.277-36.71c27.142,0.234,45.476-3.511,55.729-11.332
			C405.182,238.189,416.306,241.859,424.96,244.167z M199.161,271.386c-8.488-1.26-16.685-2.512-24.5-3.733l52.459-31.426
			c3.696-2.215,8.048-3.012,12.253-2.247c5.879,1.071,11.628,2.061,17.257,2.978L199.161,271.386z M281.682,240.641
			c9.204,1.195,17.982,2.147,26.295,2.85l-58.325,34.941c-8.574-1.115-17.044-2.261-25.342-3.419L281.682,240.641z M327.205,303.144
			l-21.91,18.953c-26.719-0.708-50.868-2.316-74.414-3.886c-30.362-2.025-61.73-4.109-98.421-4.277l-22.658-40.785
			C148.438,279.946,243.427,295.818,327.205,303.144z M23.559,175.993c0.304-4.775,4.286-8.515,9.071-8.515h9.592
			c0.295,0,0.534,0.239,0.534,0.534v4.776c0,10.829,6.903,20.405,17.176,23.83l50.224,16.742
			c12.177,4.057,25.379,0.943,34.456-8.134l44.676-44.676c5.217-5.217,12.919-6.651,19.62-3.651c2.999,1.342,6.265,2.8,9.754,4.354
			l-8.111,8.816c-2.997,3.258-2.787,8.33,0.471,11.328c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589
			l11.787-12.812c4.372,1.93,8.959,3.948,13.72,6.035l-6.873,7.47c-2.997,3.258-2.787,8.33,0.471,11.328
			c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589l10.62-11.544c4.502,1.955,9.108,3.946,13.788,5.961
			l-5.774,6.276c-2.997,3.258-2.787,8.33,0.471,11.328c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589
			l9.605-10.44c4.592,1.955,9.221,3.916,13.87,5.872l-4.84,5.261c-2.997,3.258-2.787,8.33,0.471,11.328
			c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589l8.777-9.54c16.93,7.023,33.704,13.798,49.148,19.745
			c-22.78,5.986-69.02,3.414-129.332-7.571c-8.032-1.463-16.331,0.051-23.365,4.266l-68.84,41.241
			c-25.494-4.175-44.266-7.546-51.618-8.889c-9.584-12.272-22.411-21.776-37.134-27.297l-40.02-15.007L23.559,175.993z
			 M16.053,295.434l4.16-66.186l35.443,13.291c15.312,5.742,28.118,16.777,36.06,31.072l22.392,40.306H33.671
			c-4.887,0-9.431-1.953-12.795-5.498C17.513,304.873,15.801,300.233,16.053,295.434z M482.992,328.887
			c-1.13,2.259-3.183,3.964-5.634,4.675c-18.666,5.421-86.094,23.11-170.051,23.11H25.12c-0.295,0-0.534-0.239-0.534-0.534v-26.206
			c0.177,0.012,0.356,0.018,0.536,0.018h102.612c38.213,0,70.682,2.164,102.08,4.257c31.662,2.111,64.401,4.294,103.147,4.294
			c68.437,0,127.284-13.172,155.625-20.801L482.992,328.887z M495.966,298.918c-19.041,5.659-85.41,23.55-163.006,23.55
			c-1.201,0-2.381-0.009-3.572-0.013l36.946-31.96c2.665-2.306,6.125-3.795,9.744-4.194c65.653-7.241,99.593-19.348,110.463-23.861
			c5.867,6.237,9.424,14.604,9.424,23.74V298.918z"
            />
          </g>
        </g>
      </svg>
      <Link href="/">Sneakerf</Link>
    </div>
  );
}
