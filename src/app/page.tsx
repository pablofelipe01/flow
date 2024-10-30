import WorkflowDetail from './components/WorkflowDetail';

export default function Home() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/sirius.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <WorkflowDetail />
      </div>
    </div>
  );
}
