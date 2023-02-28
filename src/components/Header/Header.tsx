import * as C from './style';

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <C.Container>
      <h1>
        {title}
      </h1>
    </C.Container>
  )
}