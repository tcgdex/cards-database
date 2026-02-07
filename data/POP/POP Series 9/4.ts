import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
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
				en: "Body Slam",
				fr: "Plaquage"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
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
				en: "Double Stomp",
				fr: "Double écrasement"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "There is an enduring legend that states this Pokémon towed continents with ropes.",
		fr: "Une légende tenace veut que ce Pokémon ait traîné les continents en les attachant à des cordes."
	},

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278555,
		tcgplayer: 88664
	}
}

export default card
