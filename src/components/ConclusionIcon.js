import { conclusionText } from '../utils/conclusionText';

import Tooltip from '@mui/material/Tooltip';

import InconclusiveIcon from '@mui/icons-material/NotListedLocation';
import CheckIcon from '@mui/icons-material/Check';
import PendingIcon from '@mui/icons-material/QueryBuilder';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FmdBadIcon from '@mui/icons-material/FmdBad';

const ConclusionIcon = ({ conclusion }) => {
    let icon;
    switch (conclusion) {
        case 'halal':
            icon = <CheckIcon />;
            break;
        case 'haram':
            icon = <DangerousIcon />;
            break;
        case 'inconclusive':
            icon = <InconclusiveIcon />;
            break;
        case 'attention':
            icon = <FmdBadIcon />;
            break;
        case 'pending':
            icon = <PendingIcon />;
            break;
        default:
            icon = <PendingIcon />;
    }

    return <Tooltip title={conclusionText(conclusion)}>{icon}</Tooltip>
}

export default ConclusionIcon
