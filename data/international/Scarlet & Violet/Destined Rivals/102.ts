import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [443],
	set: Set,

	name: {
		'en-us': "Cynthia's Gible",
		'fr-fr': "Griknot de Cynthia",
		'de-de': "Cynthias Kaumalat",
		'it-it': "Gible di Camilla",
		'es-es': "Gible de Cintia",
		'pt-br': "Gible da Cíntia",
		'es-mx': "Gible de Cynthia"
	},


	illustrator: "Tomomi Ozaki",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

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
				cardmarket: 825976,
				tcgplayer: 632910
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825976,
				tcgplayer: 632910
			}
		},
	],
}

export default card
