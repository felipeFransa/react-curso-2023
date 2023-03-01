type Props = {
  data: {
    name: string,
    age: number
  }
}

export const People = ({ data }: Props) => {
  return (
    <div>
      <li>{data.name}, {data.age}</li>
    </div>
  )
}