import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [739],
	set: Set,

	name: {
		'fr-fr': "Crabagarre",
		'en-us': "Crabrawler",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Coud'Phalange",
			'en-us': "Knuckle Punch",
			'es-es': "Puño con Nudillos",
			'it-it': "Noccapugno",
			'pt-br': "Soco com Punho",
			'de-de': "Knöchelhieb"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Poing Magnum",
			'en-us': "Magnum Punch",
			'es-es': "Puño Mágnum",
			'it-it': "Superpugno",
			'pt-br': "Soco Magnum",
			'de-de': "Magnum-Schlag"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon punches trees and eats the berries that drop down, training itself and getting food at the same time.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725194,
				tcgplayer: 509839,
				cardtrader: 255799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725194,
				tcgplayer: 509839,
				cardtrader: 255799
			}
		},
	],

	illustrator: "Nagomi Nijo",

	
}

export default card
