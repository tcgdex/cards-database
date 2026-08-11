import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,

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
	suffix: "V",
	hp: 310,
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 651353
	}
}

export default card
