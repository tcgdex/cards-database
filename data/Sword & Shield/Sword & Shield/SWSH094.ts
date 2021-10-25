import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [135],
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Energize"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card