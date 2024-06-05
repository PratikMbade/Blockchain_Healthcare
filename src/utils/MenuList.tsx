import { title } from 'process';
import { BsJournalMedical } from 'react-icons/bs';
import { FaBookMedical, FaChartLine, FaHistory, FaHospital } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { GrUpdate, GrUserNew } from 'react-icons/gr';
import { IoIosLock } from 'react-icons/io';
import { IoHomeOutline, IoSettings } from 'react-icons/io5';
import { LuSun   } from 'react-icons/lu';
import { SiBitcoinsv } from 'react-icons/si';
import { TbUniverse } from 'react-icons/tb';

interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon: React.ReactNode;
  icon2?:React.ReactNode;
}

const MenuList = [
  {
    id: "1",
    title: "Home",
    path: "/dashboard",
    icon: <IoHomeOutline/>,
  },
  {
    id: "2",
    title: "My Medical Records",
    path: "/dashboard/medicalrecords",
    icon: <FaBookMedical />,
  },
  {
    id: "3",
    title: "Hospital Visits",
    path: "/dashboard/hospitalvisits",
    icon: <FaHospital />,

  },
  {
    id: "4",
    title: "Update Medical Records",
    path: "/dashboard/updatemedicalrecords",
    icon: <GrUpdate />,
  },
  {
    id: "5",
    title: "History",
    path: "",
    icon: <FaHistory />,
  },
  {
    id: "6",
    title: "Doctor's Mutate",
    path: "",
    icon: <FaUserDoctor />,
  },{
    id: "7",
    title: "My insurance",
    path: "",
    icon: <BsJournalMedical />,
  },{
    id: "8",
    title: "Settings",
    path: "",
    icon: <IoSettings />,
  }
 
];

export { MenuList };