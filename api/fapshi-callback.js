module.exports = (req, res) => {
  const { transId, pendingId } = req.query;

  if (!transId || !pendingId) {
    return res.status(400).send('Missing parameters');
  }

  res.redirect(302, `myapp://fapshi-callback?transId=${transId}&pendingId=${pendingId}`);
};