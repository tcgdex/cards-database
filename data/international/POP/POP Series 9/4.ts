import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [486],

	hp: 100,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Stomp",
				'fr-fr': "Double écrasement"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 4,

	description: {
		'en-us': "There is an enduring legend that states this Pokémon towed continents with ropes.",
		'fr-fr': "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88664,
				cardmarket: 278555
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88664,
				cardmarket: 278555
			},
		},
	],

}

export default card
