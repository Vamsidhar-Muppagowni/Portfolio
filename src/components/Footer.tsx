const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-8 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Vamsidhar Muppagowni. Built with React & Three.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
