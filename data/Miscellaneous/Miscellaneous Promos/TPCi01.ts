import { Card } from '../../../interfaces'
import Set from '../Miscellaneous Promos'

const card: Card = {
	name: {
		en: "Ishihara-GX",
	},
	illustrator: "Mike Cressy",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 350,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "GX",
	retreat: 0,

	cameoDexIds: [479],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Red Chanchanko",
			},
			effect: {
				en: "Prevent all effects of attacks (including damage), Abilities, and Trainer cards done to this Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "60 Congratulations!-GX",
			},
			damage: 1060,
			effect: {
				en: "Flip 60 coins. For each heads, take a present! (You can't use more than 1 GX attack in a game.)",
			},
		},
	],
}

export default card
