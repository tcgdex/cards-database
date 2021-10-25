import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	dexId: [841],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Applin"
	},

	description: {
		en: "It ate a sour apple, and that induced its evolution. In its cheeks, it stores an acid capable of causing chemical burns."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Apple Drop"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Acid Spray"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card