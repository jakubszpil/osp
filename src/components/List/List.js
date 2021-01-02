function ListItem({ item }) {
  const iconProps = {
    style: {
      width: '14px',
      height: 'auto',
    },
  };
  return (
    <li className="h4 d-flex flex-column justify-content-start my-4">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          {item.name} {item.surname}
        </div>
        <div className="ml-auto position-relative">
          <span className="h6 font-weight-normal mr-3">
            {item.last_update.split(' ')[0].slice(5).split('-').join('/')} {item.last_update.split(' ')[1].slice(0, 5)}
          </span>
          <img {...iconProps} src="fireman.png" alt={'fireman' + item.id} />
          {Number(item.ratownik) === 1 && <img {...iconProps} src="rescuer.png" alt={'rescuer' + item.id} />}
          {Number(item.kierowca) === 1 && <img {...iconProps} src="driver.png" alt={'driver' + item.id} />}
        </div>
      </div>
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
