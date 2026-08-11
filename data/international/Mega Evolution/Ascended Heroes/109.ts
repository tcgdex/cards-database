import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Gible",
		'fr-fr': "Griknot de Cynthia",
		'es-es': "Gible de Cintia",
		'es-mx': "Gible de Cynthia",
		'de-de': "Cynthias Kaumalat",
		'it-it': "Gible di Camilla",
		'pt-br': "Gible da Cíntia"
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
			'es-es': "Lanzamiento de Rocas",
			'es-mx': "Lanzamiento de Rocas",
			'de-de': "Steinschleuderer",
			'it-it': "Scaglia Pietre",
			'pt-br': "Lançamento de Pedras"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência."
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

	description: {
		'en-us': "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869720,
			tcgplayer: 675921
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870312,
			tcgplayer: 676940
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870311,
			tcgplayer: 677080
		}
	},
],
}

export default card
