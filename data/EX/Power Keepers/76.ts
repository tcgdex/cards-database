import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Glacia's Stadium",
		fr: "Stade de Glacia",
		de: "Frosinas Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Les Pokémon Eau de chaque joueur (Pokémon-ex exclus) ne possèdent pas de Faiblesse.",
		de: "Alle -Pokémon beider Spieler (außer Pokémon-ex) haben keine Schwäche mehr.",
	},

	thirdParty: {
		cardmarket: 277382,
		tcgplayer: 85751
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

