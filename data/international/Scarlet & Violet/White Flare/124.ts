import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [574],
	set: Set,

	name: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'de-de': "Mollimorba",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'es-es': "Gothita",
		'es-mx': "Gothita"
	},

	illustrator: "Kanami Ogata",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'de-de': "Super-Psischlag",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'es-es': "Superrayo Psi",
			'es-mx': "Superpsicotrueno"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836140,
				tcgplayer: 642236
			}
		},
	],
}

export default card