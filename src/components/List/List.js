function ListItem({ item }) {
  const iconProps = {
    style: {
      width: '14px',
    },
  };
  return (
    <li className="d-flex justify-content-between h4">
      <>
        <div>
          {item.name} {item.surname}
        </div>
        <div className="ml-auto position-relative">
          <img {...iconProps} src="fireman.png" alt={'fireman' + item.id} />
          {Number(item.ratownik) === 1 && <img {...iconProps} src="rescuer.png" alt={'rescuer' + item.id} />}
          {Number(item.kierowca) === 1 && <img {...iconProps} src="driver.png" alt={'driver' + item.id} />}
        </div>
      </>
    </li>
  );
}

export default function List({ items, status }) {
  return (
    <>
      <hr />
      <ul className="pl-0">
        {items
          ?.filter(item => Number(item.status) === status)
          ?.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
      </ul>
    </>
  );
}
