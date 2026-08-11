import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'de-de': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'es-mx': "Shuppet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'es-mx': "Disparo Espeluznante"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "miki kudo",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817211,
				tcgplayer: 623486
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817211,
				tcgplayer: 623486
			}
		},
	],
}

export default card
