import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim"
	},

	illustrator: "Tika Matsuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [421],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "The faint scent that emanates from its full blossom entices bug Pokémon to it."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spring Bloom"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn't have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes)."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Seed Bomb"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card