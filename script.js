// Initialize Lucide Icons
lucide.createIcons();

/* 
  ========================================
  Chart Configurations (ApexCharts)
  ========================================
  We use ApexCharts to replicate the Recharts look.
*/

// Common chart options to match the theme
const commonOptions = {
  fontFamily: 'Segoe UI, sans-serif',
  foreColor: '#64748b',
  chart: {
    toolbar: { show: false },
    background: 'transparent'
  },
  grid: {
    borderColor: '#cbd5e1',
    strokeDashArray: 4,
  }
};

// 1. Sales Overview Chart (Bar Chart)
const salesOptions = {
  ...commonOptions,
  series: [{
    name: 'Earnings',
    data: [2000, 1500, 2800, 1000, 2500, 1800, 2200, 1600, 2800, 1400, 2600, 3000]
  }],
  chart: {
    type: 'bar',
    height: 300,
    parentHeightOffset: 0,
    toolbar: { show: false }
  },
  colors: ['#EF4444'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      gradientToColors: ['#F97316'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '25%',
    }
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    show: true
  },
  tooltip: {
    theme: 'light',
    style: { fontSize: '12px' }
  }
};

const salesChart = new ApexCharts(document.querySelector("#sales-chart"), salesOptions);
salesChart.render();


// 2. Yearly Breakup Chart (Donut Chart)
const yearlyOptions = {
  series: [300, 300, 400, 200], // 2025, 2024, 2023, 2022
  labels: ['2025', '2024', '2023', '2022'],
  chart: {
    type: 'donut',
    height: 140,
    width: 140
  },
  colors: ['#FEE2E2', '#EF4444', '#F97316', '#1E40AF'],
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: { show: false }
      }
    }
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  stroke: { show: false },
  tooltip: { enabled: true, theme: 'light' }
};

const yearlyChart = new ApexCharts(document.querySelector("#yearly-chart"), yearlyOptions);
yearlyChart.render();


// 3. Monthly Earnings Chart (Area Chart)
const monthlyOptions = {
  ...commonOptions,
  series: [{
    name: 'Earnings',
    data: [25, 66, 20, 40, 12, 58, 20]
  }],
  chart: {
    type: 'area',
    height: 80, // Sparkline height
    sparkline: { enabled: true }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 1,
      gradientToColors: ['#3B82F6'],
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 50, 100]
    }
  },
  colors: ['#1E40AF'],
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: { title: { formatter: () => '' } },
    marker: { show: false },
    theme: 'light'
  }
};

const monthlyChart = new ApexCharts(document.querySelector("#monthly-chart"), monthlyOptions);
monthlyChart.render();

/*
  ========================================
  UI Interactions
  ========================================
*/

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('aside');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    // Add a class to position it absolutely on mobile if needed
    // For this simple demo, we just toggle visibility
    if (!sidebar.classList.contains('hidden')) {
      sidebar.style.position = 'fixed';
      sidebar.style.zIndex = '1000';
      sidebar.style.height = '100vh';
    }
  });
}
