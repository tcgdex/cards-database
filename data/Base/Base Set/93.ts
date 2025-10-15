import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gust of Wind",
		fr: "Rafale de vent",
		de: "Windhauch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 Pokémon du Banc votre adversaire et échangez-le avec son Pokémon actif.",
		de: "Wähle ein Pokémon auf der Bank Deines Gegners und tausche es mit seinem aktiven Pokémon aus."
	},

	thirdParty: {
		cardmarket: 273788,
		tcgplayer: 42437
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
