import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Raichu"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu"
	},

	description: {
		en: "Its tail discharges electricity into the ground, protecting it from getting shocked."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Resilience Link"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, this Pokémon takes −30 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Spark"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
