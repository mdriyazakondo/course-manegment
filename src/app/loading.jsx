const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-r-green-500 border-b-red-500 border-l-yellow-500 rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
