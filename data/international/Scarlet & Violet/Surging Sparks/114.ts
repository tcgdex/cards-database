import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [969],
	set: Set,

	name: {
		'en-us': "Glimmet",
		'fr-fr': "Germéclat",
		'es-es': "Glimmet",
		'it-it': "Glimmet",
		'pt-br': "Glimmet",
		'de-de': "Lumispross"
	},

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
			'es-es': "Lanzamiento de Rocas",
			'it-it': "Scaglia Pietre",
			'pt-br': "Lançamento de Pedras",
			'de-de': "Steinschleuderer"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794449,
				tcgplayer: 589956
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794449,
				tcgplayer: 589956
			}
		},
	],

	illustrator: "Eri Kamei",

}

export default card
