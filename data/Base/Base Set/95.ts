import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Transfert",
		de: "Tausch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez 1 Pokémon de votre Banc avec votre Pokémon actif.",
		de: "Tausche eines Deiner Pokémon auf der Bank mit Deinem aktiven Pokémon aus."
	},

	thirdParty: {
		cardmarket: 273790,
		tcgplayer: 42439
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
