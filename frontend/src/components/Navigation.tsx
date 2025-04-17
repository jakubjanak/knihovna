function Navigation() {
  return (
    <nav className="@container flex justify-between">
        <ul className="flex justify-evenly gap-10">
            <li><a href="#">Google Books</a></li>
            <li><a href="#">Apple Books</a></li>
            <li><a href="#">Amazon Books</a></li>
        </ul>
        <ul className="flex justify-evenly gap-10">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
        </ul>

        {/* Pokud bude uživatel přihlášený */}
        {/* <ul>
            <li><a href="#">My Books</a></li>
            <li><a href="#">My Reviews</a></li>
            <li><a href="#">My Profile</a></li>
        </ul> */}
    </nav>
  )
}

export default Navigation