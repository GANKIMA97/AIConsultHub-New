import { X } from "lucide-react";
import { useEffect } from "react";
import wechatQRPath from "@assets/9ecf06d798530aec4103dc275ba4e2d_1751551964938.jpg";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <X size={18} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--charcoal)" }}>
            Connect with us on WeChat
          </h3>
          <p className="text-gray-600 mb-6">
            Scan this QR code with WeChat to connect with us
          </p>

          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img 
                src={wechatQRPath} 
                alt="WeChat QR Code" 
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
              />
            </div>
          </div>

          {/* WeChat ID */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600 mb-1">WeChat ID:</p>
            <p className="text-lg font-semibold" style={{ color: "var(--accent-emerald)" }}>
              AIConsult_Hub
            </p>
          </div>

          {/* Instructions */}
          <div className="text-sm text-gray-500 space-y-2">
            <p>1. Open WeChat on your phone</p>
            <p>2. Tap the "+" icon and select "Scan QR Code"</p>
            <p>3. Scan the QR code above to add us</p>
          </div>
        </div>
      </div>
    </div>
  );
}