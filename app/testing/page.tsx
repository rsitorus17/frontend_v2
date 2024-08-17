"use client";

import Head from 'next/head';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the components you need from Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AIComplexitiesPage = () => {
  // Example data for items
  const items = [
    { name: 'Item 1', minPrice: '$100', maxPrice: '$500', avgPrice: '$300' },
    { name: 'Item 2', minPrice: '$150', maxPrice: '$600', avgPrice: '$350' },
    { name: 'Item 3', minPrice: '$200', maxPrice: '$700', avgPrice: '$400' },
    { name: 'Item 4', minPrice: '$250', maxPrice: '$800', avgPrice: '$450' },
    { name: 'Item 5', minPrice: '$300', maxPrice: '$900', avgPrice: '$500' },
    { name: 'Item 6', minPrice: '$350', maxPrice: '$1000', avgPrice: '$550' },
    { name: 'Item 7', minPrice: '$400', maxPrice: '$1100', avgPrice: '$600' },
    { name: 'Item 8', minPrice: '$450', maxPrice: '$1200', avgPrice: '$650' },
  ];

  // Example data for average price history of Item 1 over a year
  const item1PriceHistory = [
    { month: 'January', avgPrice: 320 },
    { month: 'February', avgPrice: 330 },
    { month: 'March', avgPrice: 340 },
    { month: 'April', avgPrice: 350 },
    { month: 'May', avgPrice: 360 },
    { month: 'June', avgPrice: 370 },
    { month: 'July', avgPrice: 380 },
    { month: 'August', avgPrice: 390 },
    { month: 'September', avgPrice: 400 },
    { month: 'October', avgPrice: 410 },
    { month: 'November', avgPrice: 420 },
    { month: 'December', avgPrice: 430 },
  ];

  // Chart data for the price history
  const chartData = {
    labels: item1PriceHistory.map(data => data.month),
    datasets: [
      {
        label: 'Average Price',
        data: item1PriceHistory.map(data => data.avgPrice),
        borderColor: '#00FFB3',
        backgroundColor: 'rgba(0, 255, 179, 0.2)',
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `$${value}`,
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>AI Complexities</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://source.unsplash.com/1600x900/?valley,sunset")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'slowZoom 30s ease-in-out infinite alternate',
          zIndex: -1,
          filter: 'brightness(0.7)',
        }}
      />
      <nav style={{
        backgroundColor: '#101010',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#00FFB3',
            borderRadius: '5px',
            marginRight: '1rem',
          }} />
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            fontFamily: '"Montserrat", sans-serif',
          }}>
            {['About', 'Contacts', 'Other'].map((item) => (
              <li key={item} style={{ margin: '0 1rem' }}>
                <a href="#" style={{
                  color: '#00FFB3',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main style={{ 
        fontFamily: '"Montserrat", sans-serif',
        padding: '2rem',
        maxWidth: '800px',
        margin: '2rem auto',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#FFFFFF',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 255, 179, 0.3)',
      }}>
        <h1 style={{ color: '#00FFB3' }}>The Complexities of AI</h1>
        <p>
          Artificial Intelligence (AI) represents a multifaceted and intricate field of study, encompassing a wide array of disciplines including computer science, mathematics, neuroscience, and philosophy. The complexity of AI stems from its ambitious goal of replicating and potentially surpassing human cognitive abilities, which involves tackling challenges such as natural language processing, computer vision, decision-making under uncertainty, and the development of artificial general intelligence. These pursuits necessitate the integration of advanced algorithms, vast amounts of data, and sophisticated hardware, all while grappling with ethical considerations and the potential societal impacts of increasingly autonomous systems. As AI continues to evolve, it pushes the boundaries of our understanding of intelligence itself, prompting deep questions about consciousness, creativity, and the nature of the human mind.
        </p>
        
        {/* Widget for Listing Items */}
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#00FFB3' }}>Example Items</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {items.map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#202020',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 255, 179, 0.2)',
              }}>
                <h3 style={{ color: '#00FFB3', marginBottom: '0.5rem' }}>{item.name}</h3>
                <p style={{ margin: '0.2rem 0', color: '#FFFFFF' }}><strong>Min Price:</strong> {item.minPrice}</p>
                <p style={{ margin: '0.2rem 0', color: '#FFFFFF' }}><strong>Max Price:</strong> {item.maxPrice}</p>
                <p style={{ margin: '0.2rem 0', color: '#FFFFFF' }}><strong>Avg Price:</strong> {item.avgPrice}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Widget for Price History of Item 1 */}
        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ color: '#00FFB3' }}>Price History of Item 1</h2>
          <div style={{
            backgroundColor: '#202020',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 255, 179, 0.2)',
          }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </section>
        
        <h2 style={{ color: '#00FFB3' }}>Machine Learning: The Core of AI</h2>
        <p>
          At the heart of modern AI lies machine learning, a subset of AI that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience. Machine learning has revolutionized numerous fields, from image and speech recognition to autonomous vehicles and personalized recommendations. The power of machine learning lies in its ability to discover patterns in large datasets, make predictions, and continuously improve its performance without explicit programming.
        </p>
        <h2 style={{ color: '#00FFB3' }}>Deep Learning and Neural Networks</h2>
        <p>
          Deep learning, a subfield of machine learning, has gained significant attention in recent years due to its remarkable success in various AI tasks. Inspired by the structure and function of the human brain, deep learning utilizes artificial neural networks with multiple layers to process and learn from data. These neural networks can automatically learn hierarchical representations of data, enabling them to tackle complex problems such as natural language understanding, image generation, and even game playing at superhuman levels.
        </p>
        <h2 style={{ color: '#00FFB3' }}>The Ethics of AI</h2>
        <p>
          As AI systems become more powerful and pervasive, ethical considerations surrounding their development and deployment have come to the forefront. Issues such as algorithmic bias, privacy concerns, job displacement, and the potential for autonomous weapons raise important questions about the responsible use of AI. Ensuring fairness, transparency, and accountability in AI systems has become a crucial area of research and policy-making, with ongoing debates about how to balance technological progress with ethical and societal concerns.
        </p>
        <h2 style={{ color: '#00FFB3' }}>AI and the Future of Work</h2>
        <p>
          The rapid advancement of AI technologies has sparked discussions about the future of work and its impact on various industries. While AI has the potential to automate many tasks and increase productivity, it also raises concerns about job displacement and the need for reskilling the workforce. As AI continues to evolve, it is likely to transform many professions, creating new job opportunities while rendering others obsolete. Adapting to this changing landscape will require a focus on developing skills that complement AI technologies, such as creativity, emotional intelligence, and complex problem-solving.
        </p>
        <h2 style={{ color: '#00FFB3' }}>The Quest for Artificial General Intelligence</h2>
        <p>
          While current AI systems excel at specific tasks, the holy grail of AI research remains the development of Artificial General Intelligence (AGI) - a hypothetical AI system that can match or surpass human-level intelligence across a wide range of cognitive tasks. AGI represents a significant leap beyond narrow AI, requiring not just the ability to process and learn from data, but also to reason, plan, and solve problems in novel situations. The pursuit of AGI raises profound questions about the nature of intelligence and consciousness, and its potential realization could have far-reaching implications for humanity's future.
        </p>
      </main>
      <style jsx global>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        h1, h2, h3, h4 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        ul {
          padding: 0;
        }
        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

export default AIComplexitiesPage;
