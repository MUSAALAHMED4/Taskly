
import { 
    faCheckCircle,
    faSpinner,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';

const verification = [
    { id: 1, label: "Completed Tasks", value: 80, color: "success", icon: faCheckCircle },
    { id: 2, label: "In Progress Tasks", value: 15, color: "info", icon: faSpinner },
    { id: 3, label: "Pending Tasks", value: 5, color: "warning", icon: faExclamationCircle }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    verification,
    totalOrders
};