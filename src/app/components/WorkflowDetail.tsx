'use client';
import { useState } from 'react';
import { FaRegCalendarAlt, FaTools, FaRocket, FaBrain, FaCoins, FaClipboardList, FaLayerGroup } from 'react-icons/fa';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

interface DropdownItem {
  title: string;
  details: string[];
}

interface DropdownMenu {
  label: string;
  icon: JSX.Element;
  items: DropdownItem[];
}

const WorkflowDetail: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownMenus: DropdownMenu[] = [
    {
      label: "1. Landing Page Sirius-Verse",
      icon: <FaRegCalendarAlt className="text-blue-500" />,
      items: [
        {
          title: "Fecha de entrega inicial: 15 de Noviembre 2024",
          details: [
            "Semana 1 (1-7 Noviembre 2024): Automaciones y Código",
            "Semana 2 (8-14 Noviembre 2024): Pruebas Internas",
            "Semana 3 (15-21 Noviembre 2024): Pruebas de Usuarios",
            "Semana 4 (22-28 Noviembre 2024): Ajustes Post-feedback",
            "Semana 6 (6-12 Diciembre 2024): Producción",
          ],
        },
      ],
    },
    {
      label: "2. Inside Apps",
      icon: <FaTools className="text-green-500" />,
      items: [
        {
          title: "Piroly App - Producción primera semana de Diciembre 2024",
          details: [
            "Semana 1: Desarrollo Backend con Python y TensorFlow",
            "Semana 2: Pruebas Internas con Proton VPN",
            "Semana 3: Beta Testing",
            "Semana 6: Producción con n8n y Make.com",
          ],
        },
        {
          title: "Data Lab - Pruebas segunda semana de Noviembre 2024, Producción Enero 2025",
          details: [
            "Semana 2: Configuración Inicial",
            "Semana 3-6: Pruebas Continuas",
            "Enero 2025: Producción",
          ],
        },
        {
          title: "Reuniones App - Producción Enero 2025",
          details: [
            "Semana 1-6: Pruebas y Ajustes",
            "Enero 2025: Producción y Soporte",
          ],
        },
        {
          title: "Calculadora de Carbono - Inicio Enero 2025",
          details: [
            "Enero 2025: Automaciones y Código",
            "Febrero - Marzo 2025: Pruebas y Producción",
          ],
        },
        {
          title: "Operaciones App - Inicio Enero 2025",
          details: [
            "Enero - Febrero 2025: Desarrollo y Pruebas",
            "Marzo 2025: Producción",
          ],
        },
      ],
    },
    {
      label: "3. CRM Clientes App",
      icon: <FaClipboardList className="text-yellow-500" />,
      items: [
        {
          title: "Inicio Febrero 2025, Producción Junio 2025",
          details: [
            "Febrero - Marzo 2025: Automaciones y Código",
            "Abril 2025: Pruebas Internas",
            "Mayo 2025: Pruebas de Usuarios",
            "Junio 2025: Producción",
          ],
        },
      ],
    },
    {
      label: "4. Project Manager AI App",
      icon: <FaBrain className="text-purple-500" />,
      items: [
        {
          title: "Inicio Primera semana de Noviembre 2024, Producción Febrero 2025",
          details: [
            "Semana 1: Desarrollo de IA con Python y TensorFlow",
            "Noviembre - Enero 2025: Pruebas y Desarrollo Continuo",
            "Febrero 2025: Producción",
          ],
        },
      ],
    },
    {
      label: "5. JDL Spiritual App",
      icon: <FaRocket className="text-pink-500" />,
      items: [
        {
          title: "Inicio Enero 2025, Producción Febrero 2025",
          details: [
            "Enero 2025: Desarrollo Inicial",
            "Febrero 2025: Pruebas y Producción",
          ],
        },
      ],
    },
    {
      label: "6. Inside Clients Data App Model",
      icon: <FaLayerGroup className="text-indigo-500" />,
      items: [
        {
          title: "Estructuración Continua durante el Semestre",
          details: [
            "Noviembre 2024 - Junio 2025: Desarrollo Iterativo",
            "Pruebas y Ajustes Continuos",
            "Escalado para nuevos clientes",
          ],
        },
      ],
    },
    {
      label: "7. Inside Dashboard App",
      icon: <FaRegCalendarAlt className="text-blue-400" />,
      items: [
        {
          title: "En producción, crecimiento continuo",
          details: [
            "Noviembre 2024 - Junio 2025: Desarrollo y Mejora Continua",
            "Añadiendo Funcionalidades",
            "Optimización y Integración Futuras",
          ],
        },
      ],
    },
    {
      label: "8. Sirius Coin",
      icon: <FaCoins className="text-yellow-500" />,
      items: [
        {
          title: "Proyecto a discutir y profundizar",
          details: [
            "Noviembre 2024 - Febrero 2025: Investigación y Planificación",
            "Marzo - Junio 2025: Desarrollo Inicial (Dependiendo de Decisiones)",
          ],
        },
      ],
    },
    {
      label: "9. Producción N8N, Render, Rig",
      icon: <FaTools className="text-red-500" />,
      items: [
        {
          title: "Optimización Continua durante Noviembre 2024 - Junio 2025",
          details: [
            "Automatizaciones con N8N",
            "Optimización con Render",
            "Configuración de Rigs",
          ],
        },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center gap-4">
  <img 
    src="/Logo Sirius ALTA.png" 
    alt="SiriusVerse Logo" 
    className="w-20 h-12 rounded-lg"
  />

</h2>
<br />
<h2 className= "text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center gap-4">  SiriusVerse</h2>
      {dropdownMenus.map((menu, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            onClick={() => toggleDropdown(index)}
          >
            <div className="flex items-center">
              {menu.icon}
              <span className="font-semibold ml-2">{menu.label}</span>
            </div>
            {openDropdown === index ? (
              <MdExpandLess className="w-6 h-6 text-gray-600" />
            ) : (
              <MdExpandMore className="w-6 h-6 text-gray-600" />
            )}
          </button>
          {openDropdown === index && (
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div className="mt-2 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-200 rounded-lg shadow-inner p-4">
                {menu.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-700 border-b last:border-none pb-3 mb-3 last:mb-0 last:pb-0"
                  >
                    <strong className="block text-base text-gray-900 mb-2">
                      {item.title}
                    </strong>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.details.map((detail, detailIdx) => (
                        <li
                          key={detailIdx}
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkflowDetail;
