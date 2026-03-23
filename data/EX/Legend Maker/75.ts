import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Giant Stump",
		fr: "Souche géante",
		de: "Riesiger Baumstumpf"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Lorsque Souche géante entre en jeu, chaque joueur doit défausser des Pokémon de Banc, ainsi que toutes les cartes qui leur sont attachées, jusqu'à ce qu'il ne lui reste plus que 3 Pokémon de Banc. (Vous défaussez vos Pokémon en premier.)",
		de: "Jeder Spieler kann nicht mehr als 3 Pokémon auf der Bank haben.\n\nWenn Riesiger Bumstumpf ins Spiel kommt, legt jeder Spieler so lange Pokémon (inklusive der an diese angelegten Karten) auf den Ablagestapel, bis sich nur noch 3 Pokémon auf der Bank befinden. (Du musst als Erster Pokémon ablegen.)",
	},

	thirdParty: {
		cardmarket: 276952,
		tcgplayer: 85697
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		}
	]
}

export default card
