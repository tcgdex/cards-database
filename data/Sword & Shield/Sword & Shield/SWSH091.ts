import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Pokemon",
	dexId: [437],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	description: {
		en: "Many scientists suspect that this Pokémon originated outside the Galar region, based on the patterns on its body."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Transfer"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Metal Energy from 1 of your Pokémon to another of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Zen Headbutt"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3
}

export default card