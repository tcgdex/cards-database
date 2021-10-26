import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Crobat V"
	},

	rarity: "None",
	dexId: [169],
	hp: 180,
	types: ["Darkness"],

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

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
