import { useState } from 'react';
import './ProductListing.css';

import ConclusionIcon from '../ConclusionIcon';

// MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// Icons
import Flag from '@mui/icons-material/Flag';
import { conclusionText } from '../../utils/conclusionText';

const ProductListing = ({ product }) => {
    const [open, setOpen] = useState(false);

    const ingredients = product.ingredients.data;
    const coverImage = product.coverImage.data ?
        process.env.REACT_APP_PUBLIC_URL + product.coverImage.data.attributes.url : '/placeholder.jpg';

    return (
        <Card className="ProductListing">
            <CardMedia
                className="ProductListing__media"
                image={coverImage}
                alt={product.name}
            // style={{ opacity: product.coverImage.data ? ? 1 : 0.5 }}
            />
            <CardContent className="ProductListing__details">
                <Typography component="div" variant="h5">
                    {product.name}
                </Typography>
                {ingredients.length > 0 ?
                    <>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            This item is comprised of multiple ingredients.
                        </Typography>
                        <Button
                            sx={{ pl: 0, mt: 1 }}
                            onClick={() => { setOpen(true) }}
                        >Check Ingredients</Button>
                    </>
                    :
                    <Box mt={2} display='flex'>
                        <ConclusionIcon conclusion={product.conclusion} />
                        <Box ml={2} >{conclusionText(product.conclusion)}</Box>
                    </Box>
                }
            </CardContent>
            <CardActions className="ProductListing__actions">
                <Tooltip title='Report Item'>
                    <IconButton >
                        <Flag />
                    </IconButton>
                </Tooltip>
            </CardActions>
            {open &&
                <Dialog
                    onClose={() => { setOpen(false) }}
                    open={open}
                    fullWidth scroll='body'
                >
                    <DialogTitle>{product.name}</DialogTitle>
                    <DialogContent>
                        <List>
                            {ingredients.map((ingredient) => (
                                <ListItem>
                                    <ListItemIcon><ConclusionIcon conclusion={ingredient.attributes.conclusion} /></ListItemIcon>
                                    <ListItemText primary={ingredient.attributes.name} />
                                </ListItem>
                            ))}
                        </List>
                    </DialogContent>
                </Dialog>
            }
        </Card>
    )
}

export default ProductListing
