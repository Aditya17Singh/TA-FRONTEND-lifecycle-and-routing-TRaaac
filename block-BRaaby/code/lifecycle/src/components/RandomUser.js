function RandomUser(props) {
  let fullName =
    props.user.name.title +
    " " +
    props.user.name.first +
    " " +
    props.user.name.last;
  return (
    <>
      <div className="card container">
        <div className="img">
          <img
            className="width"
            src={props.user.picture.large}
            alt={props.user.cell}
          />
        </div>
        <div>
          {console.log(props)}
          {/* <h2>My Name is {fullName}</h2> */}
          <h4>{props.getValue}</h4>
          <h4>{props.display}</h4>
        </div>
        <ul className="flex">
          <li>
            <i
              onClick={(event) => props.randomUser(event, "user")}
              className="fas fa-user"
            ></i>
          </li>
          <li>
            <i
              onClick={(event) => props.randomUser(event, "email")}
              class="fas fa-envelope"
            ></i>
          </li>
          <li>
            <i
              onClick={(event) => props.randomUser(event, "age")}
              class="fab fa-magento"
            ></i>
          </li>
          <li>
            <i
              onClick={(event) => props.randomUser(event, "address")}
              class="fas fa-map"
            ></i>
          </li>
          <li>
            <i
              onClick={(event) => props.randomUser(event, "phone")}
              class="fas fa-phone"
            ></i>
          </li>
          <li>
            <i
              onClick={(event) => props.randomUser(event, "password")}
              class="fas fa-lock"
            ></i>
          </li>
        </ul>
        <div>
          <button onClick={props.getRandom}>Random User</button>
        </div>
      </div>
    </>
  );
}
export default RandomUser;
