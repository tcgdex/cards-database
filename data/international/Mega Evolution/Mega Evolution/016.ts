import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'de-de': "Nincada",
		'it-it': "Nincada",
		'es-es': "Nincada",
		'pt-br': "Nincada",
		'es-mx': "Nincada"
	},

	illustrator: "Kuroimori",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	dexId: [290],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851087,
				tcgplayer: 654355
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851087,
				tcgplayer: 654355
			}
		},
	],
}

export default card
