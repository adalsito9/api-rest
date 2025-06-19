const express = require('express');
const router = express.Router();

router.get('/anillo', (req, res) => {
  res.json({ message: 'Hola' 
  });
});



module.exports = router;
