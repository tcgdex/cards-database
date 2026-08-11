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

	illustrator: "Mousho",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 835976,
				tcgplayer: 642153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835976,
				tcgplayer: 642153
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836567,
				tcgplayer: 642396
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836568,
				tcgplayer: 642324
			}
		},
	],
}

export default card
