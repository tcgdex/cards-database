import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		'fr-fr': "Embrylex",
		'en-us': "Larvitar",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Poing Tire-Bouchon",
			'en-us': "Corkscrew Punch",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Confrontation",
			'en-us': "Confront",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725283,
				tcgplayer: 509950,
				cardtrader: 255645
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
