import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		en: "Lucario"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It has the ability to sense the auras of all things. It understands human speech."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Feint"
		},

		damage: 30,

		effect: {
			en: "This attack’s damage isn’t affected by Resistance."
		}
	}, {
		name: {
			en: "Aura Sphere"
		},

		damage: 40,

		effect: {
			en: "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		}
	}]
}

export default card