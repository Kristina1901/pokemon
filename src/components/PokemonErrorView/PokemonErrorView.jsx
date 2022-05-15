import original from 'components/original.jpg';
export default function PokemonFallbackView({ message }) {
  return (
    <div role="alert">
      <img src={original} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}
