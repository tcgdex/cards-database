import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Crobat V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	dexId: [169],
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Asset"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can't use more than 1 Dark Asset Ability each turn."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Venomous Fang"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card