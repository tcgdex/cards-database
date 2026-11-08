import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [886],
	set: Set,

	name: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
		'de-de': "Grolldra"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 40
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
	regulationMark: "F",


	description: {
		'en-us': "It's capable of flying faster than 120 mph. It battles alongside Dreepy and dotes on them until they successfully evolve.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682135,
				tcgplayer: 451742
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682135,
				tcgplayer: 451742
			}
		},
	],
}

export default card
