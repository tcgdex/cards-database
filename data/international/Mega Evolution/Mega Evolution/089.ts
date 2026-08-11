import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'de-de': "Kleptifux",
		'it-it': "Nickit",
		'es-es': "Nickit",
		'pt-br': "Nickit",
		'es-mx': "Nickit"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [827],

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'de-de': "Fänge der Dunkelheit",
			'it-it': "Oscurizanna",
			'es-es': "Colmillo de Oscuridad",
			'pt-br': "Presa Sombria",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851160,
				tcgplayer: 654428
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851160,
				tcgplayer: 654428
			}
		},
	],
}

export default card
