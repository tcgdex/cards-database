import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [221],
	set: Set,

	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'de-de': "Keifel",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'es-mx': "Piloswine"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'de-de': "Quiekel",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'es-mx': "Swinub"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'de-de': "Stärke",
			'it-it': "Forza",
			'pt-br': "Força",
			'es-mx': "Fuerza"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Impaling Tusk",
			'fr-fr': "Défense Empaleuse",
			'es-es': "Colmillo Empalador",
			'de-de': "Durchbohrender Stoßzahn",
			'it-it': "Zanne Acuminate",
			'pt-br': "Presa Perfurante",
			'es-mx': "Colmillo Perforante"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Aliya Chen",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817230,
				tcgplayer: 623505
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817230,
				tcgplayer: 623505
			}
		},
	],
}

export default card
