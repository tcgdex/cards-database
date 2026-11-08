import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'es-mx': "Shuppet",
		'de-de': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador"
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

	description: {
		'en-us': "It loves to feed on feelings like envy and malice. Its upright horn catches the emotions of people.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869701,
			tcgplayer: 675902
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870276,
			tcgplayer: 676922
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870275,
			tcgplayer: 677062
		}
	},
],
}

export default card
