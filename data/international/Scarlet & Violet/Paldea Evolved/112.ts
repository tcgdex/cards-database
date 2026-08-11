import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		'fr-fr': "Makuhita",
		'en-us': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Grande Claque",
			'en-us': "Slap Push",
			'es-es': "Empujón con Bofetón",
			'it-it': "Spintonata",
			'pt-br': "Tapa Empurrão",
			'de-de': "Stoß"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715587,
				tcgplayer: 497527,
				cardtrader: 248758
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715587,
				tcgplayer: 497527,
				cardtrader: 248758
			}
		},
	],

	illustrator: "Kurata So",

	description: {
		'en-us': "It grows stronger by enduring harsh training. It is a gutsy Pokémon that can withstand any attack.",
	},
}

export default card
