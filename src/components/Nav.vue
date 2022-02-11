<template>
    <header id="main-header">
        <div class="header-main-container">

            <div class="header-logo-container">
                <!--<a href="./main.php">
                    <img src="../images/logo-or.png" alt="logo du site" class="header-logo"> !-->
                <!-- </a> -->
            </div>

            <div class="header-title-container">
                <h1><a href="./main.php">LEAGUE OF SKINS</a></h1>
            </div>

            <div class="header-li-container">
                <ul class="header-ul">
                    <li>
                        <a href="../admin/admin-dashboard.php">Admin</a>
                    </li>
                    <li>
                        <a href="./connection.php">Se connecter</a>
                    </li>
                    <li>
                        <a href="./basket.php">Mon panier</a>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="nav-header">
            <ul>
                <li class="header-nav-li">
                    <a href="./main.php">Skins</a>
                </li>
                <li class="header-nav-li">
                    <a href="./orders.php">Mes skins</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>
.header-main-container {
    display: flex;
    justify-content: space-between;
    background-color: #21181C;
    color: white;
    padding-top: 15px;
}
.header-main-container .header-logo-container, .header-main-container .header-li-container {
    width: 25%;
}
.header-main-container .header-title-container {
    width: 50%;
}
.header-main-container .header-logo-container {
    margin: 5px;
}
.header-main-container .header-logo-container .header-logo {
    width: 50px;
}
.header-main-container .header-title-container > h1 {
    text-align: center; 
    margin: 0;
}
.header-main-container .header-title-container > h1 a {
    color: #c28f2c;
    text-decoration: none;
}
.header-main-container .header-li-container {
    text-align: right;
}
.header-main-container .header-li-container a:hover {
    color: #c28f2c;
}
.header-ul {
    margin: 0;
}
.header-ul > li {
    padding: 3px 20px;
}
.nav-header {
    background-color:#21181C ;
}
.nav-header > ul {
    display: flex;
    justify-content: center;
    margin: 0;
}
.nav-header > ul > .header-nav-li {
    width: 25%;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size:18px;
    border-bottom: 3px solid transparent;
}
.nav-header > ul > .header-nav-li a {
    display: block;
    text-decoration: none;
}
.nav-header > ul > .header-nav-li:hover {
    background-color: rgb(0 102 128);
    border-bottom: 3px solid #c28f2c;
}
@media screen and (max-width:768px) {
    .header-main-container .header-title-container {
        display: none;
    }
    .header-main-container .header-li-container {
        width: 50%;
    }
}
</style>