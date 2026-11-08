import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'de-de': "Sedisal",
		'it-it': "Naclstack",
		'es-es': "Naclstack",
		'pt-br': "Naclstack",
		'es-mx': "Naclstack"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'de-de': "Geosali",
		'it-it': "Nacli",
		'es-es': "Nacli",
		'pt-br': "Nacli",
		'es-mx': "Nacli"
	},
	stage: "Stage1",
	dexId: [933],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Rock Hurl",
			'fr-fr': "Lance-Pierre",
			'de-de': "Steinschleuderer",
			'it-it': "Scaglia Pietre",
			'es-es': "Lanzamiento de Rocas",
			'pt-br': "Lançamento de Pedras",
			'es-mx': "Lanzamiento de Rocas"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851154,
				tcgplayer: 654422
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851154,
				tcgplayer: 654422
			}
		},
	],
}

export default card
