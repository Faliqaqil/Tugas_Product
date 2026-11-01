export default function MenuSummary({ totalMenu }) {
  return (
    <div className="summary-box">
      <span>Total Varian Menu Tersedia</span>
      <span style={{ fontSize: '1.2rem' }}>{totalMenu}</span>
    </div>
  );
}