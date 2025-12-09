
const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Designed &amp; Built by <span className="font-semibold text-gray-800">Vamsidhar Muppagowni</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
