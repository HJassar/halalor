export const conclusionText = (conclusion) => {
    switch (conclusion) {
        case 'halal':
            return 'No issues related to this item were found';
        case 'haram':
            return 'This item is undisputably haram';
        case 'inconclusive':
            return 'Our investigations about this item were inconclusive';
        case 'attention':
            return 'Some details for this item require your attention';
        case 'pending':
            return 'This item is still under investigation';
        default:
            return 'This item is still under investigation';
    }
};