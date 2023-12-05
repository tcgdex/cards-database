import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Team Galactic's Wager",
		fr: "La pari de l'équipe Galaxie",
		de: "Team Galaktiks Wette"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChaque joueur mélange sa main à son deck et vous et votre adversaire jouez au jeu 'pierre-papier-ciseaux'. Le gagnant pioche jusqu'à 6 cartes. Le perdant pioche jusqu'à 3 cartes. (Vous piochez vos cartes en premier.)",
		de: "Jeder Spieler mischt seine Handkarten zurück in sein Deck. Du und dein Gegner spielen \"Schere-Stein-Papier\". Der Gewinner zieht bis zu 6 Karten, der Verlierer bis zu 3 Karten. (Du ziehst zuerst.)"
	}
}

export default card
