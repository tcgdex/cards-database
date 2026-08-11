import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [739],
	set: Set,

	name: {
		fr: "Crabagarre",
		en: "Crabrawler",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			fr: "Coud'Phalange",
			en: "Knuckle Punch",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			pt: "Soco com Punho",
			de: "Knöchelhieb"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Poing Magnum",
			en: "Magnum Punch",
			es: "Puño Mágnum",
			it: "Superpugno",
			pt: "Soco Magnum",
			de: "Magnum-Schlag"
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
		en: "This Pokémon punches trees and eats the berries that drop down, training itself and getting food at the same time.",
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
