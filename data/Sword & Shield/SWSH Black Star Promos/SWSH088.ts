import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim",
		fr: "Ceriflor"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Spring Bloom"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn’t have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes)."
		}
	}],

	attacks: [{
		name: {
			en: "Seed Bomb"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card