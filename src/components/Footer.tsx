import { Mail, Phone, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@igofp.org" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                contact@igofp.org
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                +123 456 7890
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <a href="https://github.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
              Contribute on GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} i-GOFP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};