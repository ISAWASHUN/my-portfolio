import {ChartOptions} from 'chart.js';

export const headerData = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '#about',
  },
  {
    id: 3,
    title: 'Works',
    link: '#works',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
  },
];

export const WorksData = [
  {
    id: 1,
    title: 'work1',
    img: '/profile_logo.png',
    link: 'https://www.google.com',
    github: 'https://www.google.com',
  },
  {
    id: 2,
    title: 'work2',
    img: '/profile_logo.png',
    link: 'https://www.google.com',
    github: 'https://www.google.com',
  },
  {
    id: 3,
    title: 'work3',
    img: '/profile_logo.png',
    link: 'https://www.google.com',
    github: 'https://www.google.com',
  },
  {
    id: 4,
    title: 'work4',
    img: '/profile_logo.png',
    link: 'https://www.google.com',
    github: 'https://www.google.com',
  },
]

export const optionsFrontend: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Frontend Skills',
      padding: {
        top: 10,
        bottom: 30
      },
      font: {
        size: 24,
      }
    }
  }
};

export const optionsBackend: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Backend Skills',
      padding: {
        top: 10,
        bottom: 30
      },
      font: {
        size: 24,
      }
    }
  }
};

export const optionsDevops: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'DevOps Skills',
      padding: {
        top: 10,
        bottom: 30
      },
      font: {
        size: 24,
      }
    }
  }
};

export const frontendData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const backendData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const DevopsData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};