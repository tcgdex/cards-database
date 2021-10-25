import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Gengar"
	},

	illustrator: "Shibuzoh.",
	rarity: "None",
	category: "Pokemon",
	dexId: [94],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	description: {
		en: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Life Shaker"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Hypnoblast"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card