export default async function handler(req, res) {
  const { network, user_id, amount, transaction_id } = req.query;
  console.log(`Webhook ${network} user ${user_id} amount ${amount} tx ${transaction_id}`);
  // TODO: verify hash, check unique tx, split 70/30, save to DB, 7 day pending
  res.status(200).send('1');
}
