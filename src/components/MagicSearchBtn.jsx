import { useNavigate } from 'react-router-dom';
import { WandSparkles } from 'lucide-react';

function MagicSearch() {
  const navigate = useNavigate();

  return (
    <div className='border-2 border-[#4F46E5] flex flex-row items-center h-12 rounded-lg p-2'>
    <WandSparkles className='text-[#4F46E5]'/>
    <button
      onClick={() => navigate('/magic-search')}
      className="mt-4 p-2 text-[#4F46E5] font-medium -translate-y-2 "
    >
      Magic Search
    </button>
    </div>
  );
}

export default MagicSearch;