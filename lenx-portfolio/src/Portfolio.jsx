
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Download, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <section className="max-w-5xl mx-auto grid gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Charles Sosu</h1>
          <p className="text-lg md:text-xl mt-2 text-gray-600">
            Graphic Designer & Visual Storyteller at Lenx
          </p>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <img
            src="/profile.jpg"
            alt="Charles Sosu"
            className="rounded-2xl shadow-md w-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">
              I'm a passionate graphic designer with over 6 years of experience
              crafting branding, digital art, and visual content. At Lenx, I blend
              creativity with strategic thinking to deliver designs that
              resonate.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="mailto:ceekaystudio2@gmail.com" className="inline-flex items-center text-blue-600 hover:underline">
                <Mail className="w-4 h-4 mr-2" /> ceekaystudio2@gmail.com
              </a>
              <span className="inline-flex items-center text-gray-800">
                <Phone className="w-4 h-4 mr-2" /> 0207965277
              </span>
              <div className="mt-4 flex gap-4">
                <Button variant="default">
                  <Mail className="w-4 h-4 mr-2" /> Contact Me
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" /> Download CV
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Selected Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={`/portfolio/work${item}.jpg`}
                    alt={`Work ${item}`}
                    className="rounded-t-2xl w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Project Title {item}</h3>
                    <p className="text-gray-600 text-sm">
                      Brief description of the design project.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} Charles Sosu. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
