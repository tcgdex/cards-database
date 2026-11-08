import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [490],
	set: Set,

	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy"
	},

	illustrator: "Daisuke Ito",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 70,
	types: [
		"Water"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Call for Family",
			'fr-fr': "Appel à la famille"
		},
		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
			'fr-fr': "Choisissez dans votre deck un Pokémon de Base et placez-le sur votre Banc. Ensuite, mélangez votre deck."
		}
	}, {
		cost: [
			"Water",
			"Water"
		],
		name: {
			'en-us': "Aqua Ring",
			'fr-fr': "Anneau Hydro"
		},
		effect: {
			'en-us': "Switch Manaphy with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez Manaphy avec 1 des Pokémon de votre Banc."
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		'en-us': "Born on a cold seafloor, it will swim great distances to return to its birthplace."
	},
	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278016,
				tcgplayer: 87145
			}
		},
	],

}

export default card
