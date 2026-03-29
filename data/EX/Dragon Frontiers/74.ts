import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Holon Legacy",
		fr: "Héritage Holon",
		de: "Holon-Vermächtnis"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Chaque Pokémon en jeu possédant le symbole δ (les vôtres et ceux de votre adversaire) ne possède pas de Faiblesse et ne peut pas utiliser de Poké-Powers.",
		de: "Alle im Spiel befindlichen Pokémon, auf denen δ zu sehen ist (deine und die deines Gegners), haben keine Schwäche mehr und können keine Poké-Power einsetzen.",
	},

	thirdParty: {
		cardmarket: 277279,
		tcgplayer: 86146
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
