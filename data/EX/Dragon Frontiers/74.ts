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
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon in play that has δ on its card (both yours and your opponent's) has no Weakness and can't use any Poké-Powers.",
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
