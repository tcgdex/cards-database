import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,
	illustrator: "Yuu Nishida",

	name: {
		'fr-fr': "Morpeko V-UNION",
		'de-de': "Morpeko V-UNION",
		'es-es': "Morpeko V-UNIÓN",
		'pt-br': "Morpeko V-UNIÃO",
		'it-it': "Morpeko V UNIONE",
		'en-us': "Morpeko V-UNION"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "V-UNION",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "All You Can Eat",
			'pt-br': "Comilança"
		},

		effect: {
			'en-us': "Draw cards until you have 10 cards in your hand.",
			'pt-br': "Compre cartas até ter 10 cartas na sua mão."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "E"
}

export default card
