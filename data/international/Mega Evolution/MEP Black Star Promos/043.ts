import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'de-de': "Bauz",
		'it-it': "Rowlet",
		'es-es': "Rowlet",
		'pt-br': "Rowlet",
		'es-mx': "Rowlet"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [722],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875192,
				tcgplayer: 684467
			}
		},
	],
}

export default card
