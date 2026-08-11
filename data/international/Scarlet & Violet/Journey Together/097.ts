import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "N's Zorua",
		'fr-fr': "Zorua de N",
		'es-es': "Zorua de N",
		'de-de': "Ns Zorua",
		'it-it': "Zorua di N",
		'pt-br': "Zorua do N",
		'es-mx': "Zorua de N"
	},

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
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
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
	illustrator: "Jiro Sasumo",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817249,
				tcgplayer: 623524
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817249,
				tcgplayer: 623524
			}
		},
	],
}

export default card
