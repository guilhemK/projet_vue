<template>
    <div id="connection">
        <div class="connection-main-container">
            <form>
                <div>
                    <h2>Connexion</h2>
                </div>
                <div>
                    <input class="connection-mail" type="mail" placeholder="Adresse mail ...">
                </div>
                <div>
                    <input class="connection-mdp" type="password" placeholder="Mot de passe ...">
                </div>
                <div>
                    <button type="submit"><router-link :to="{ name:'Home' }" style="text-decoration: none;">Se connecter</router-link></button>
                </div>
            </form>
        </div>
        <div class="vertical-line"></div>
        <div class="registration-main-container">
            <form>
                <div>
                    <h2>Inscription</h2>
                </div>
                <div>
                <div>
                    <input class="registration-first-name" type="text" placeholder="Prénom ...">
                </div>
                <div>
                    <input class="registration-last-name" type="text" placeholder="Nom ...">
                </div>
                    <input class="registration-mail" type="mail" placeholder="Adresse mail ...">
                </div>
                <div>
                    <input class="registration-mdp" type="password" placeholder="Mot de passe ...">
                </div>
                
                <div>
                    <input class="registration-phone" type="number" placeholder="Numéros de téléphone ...">
                </div>
                <div>
                    <input class="registration-adresse" type="text" placeholder="Adresse ...">
                </div>
                <div>
                    <button type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    </div>
</template>