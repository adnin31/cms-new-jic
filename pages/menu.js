import {
  PieChartOutlined,
  BookOutlined,
  LaptopOutlined,
  UserOutlined,
  TeamOutlined,
  StarOutlined
} from '@ant-design/icons';

export default [
  {
    icon: <PieChartOutlined />,
    title:'Dashboard',
    route: "/"
  },
  {
    icon: <TeamOutlined />,
    title:'Customers',
    route: "/customers"
  },
  {
    icon: <LaptopOutlined />,
    title:'Roadmap',
    route: "/roadmap"
  },
  {
    icon: <BookOutlined />,
    title:'Class',
    route: "/class"
  },
  {
    icon: <StarOutlined />,
    title:'Roles',
    route: "/roles"
  },
  {
    icon: <UserOutlined />,
    title:'Users',
    route: "/users"
  },
]