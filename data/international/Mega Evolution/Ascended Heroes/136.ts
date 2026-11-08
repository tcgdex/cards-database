import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Zorua",
		'fr-fr': "Zorua de N",
		'es-es': "Zorua de N",
		'es-mx': "Zorua de N",
		'de-de': "Ns Zorua",
		'it-it': "Zorua di N",
		'pt-br': "Zorua do N"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'es-mx': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
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
		'en-us': "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869747,
			tcgplayer: 675948
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870352,
			tcgplayer: 676960
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870351,
			tcgplayer: 677100
		}
	},
],
}

export default card
