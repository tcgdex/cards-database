import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Steven's Beldum",
		'fr-fr': "Terhal de Pierre",
		'de-de': "Troys Tanhel",
		'es-es': "Beldum de Máximo",
		'it-it': "Beldum di Rocco",
		'pt-br': "Beldum do Steven"
	},


	illustrator: "hncl",

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 813959,
				tcgplayer: 635457
			},
		}
	],
}

export default card
