import { db } from "../db.js";

export const getBarang = (_, res) => {
  const q = "SELECT * FROM barang";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addBarang = (req, res) => {
  const q =
    "INSERT INTO barang(`nama_barang`, `stok`, `jumlah_terjual`, `jenis_barang`, `tanggal_transaksi`) VALUES(?)";

  const values = [
    req.body.nama_barang,
    req.body.stok,
    req.body.jumlah_terjual,
    req.body.jenis_barang,
    req.body.tanggal_transaksi,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Berhasil menambah data barang");
  });
};

export const updateBarang = (req, res) => {
  const q =
    "UPDATE barang SET `nama_barang` = ?, `stok` = ?, `jumlah_terjual` = ?, `jenis_barang` = ?,  `tanggal_transaksi = ?` WHERE `id` = ?";

  const values = [
    req.body.nama_barang,
    req.body.stok,
    req.body.jumlah_terjual,
    req.body.jenis_barang,
    req.body.tanggal_transaksi,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("berhasil merubah data barang");
  });
};

export const deleteBarang = (req, res) => {
  const q = "DELETE FROM barang WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("barang berhasil dihapus");
  });
};
