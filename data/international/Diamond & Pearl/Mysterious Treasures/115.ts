import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Team Galactic's Wager",
		'fr-fr': "La pari de l'équipe Galaxie",
		'de-de': "Team Galaktiks Wette"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Each player shuffles his or her hand into his or her deck, and you and your opponent play \"Rock-Paper-Scissors.\" The player who wins draws up to 6 cards. The player who loses draws up to 3 cards. (You draw your cards first.)",
		'fr-fr': "Chaque joueur mélange sa main à son deck et vous et votre adversaire jouez au jeu 'pierre-papier-ciseaux '. Le gagnant pioche jusqu'à 6 cartes. Le perdant pioche jusqu'à 3 cartes. (Vous piochez vos cartes en premier.)",
		'de-de': "Jeder Spieler mischt seine Handkarten zurück in sein Deck. Du und dein Gegner spielen \"Schere-Stein-Papier\". Der Gewinner zieht bis zu 6 Karten, der Verlierer bis zu 3 Karten. (Du ziehst zuerst.)",
	},

	thirdParty: {
		cardmarket: 277744,
		tcgplayer: 89811
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
