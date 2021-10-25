import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "Narumi Sato",
	rarity: "None",
	category: "Pokemon",
	dexId: [143],
	hp: 130,
	types: ["Colorless"],

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Gormandize"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may draw cards until you have 7 cards in your hand. If you use this Ability, your turn ends."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Body Slam"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card