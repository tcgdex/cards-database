import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Raichu"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu"
	},

	description: {
		en: "Its tail discharges electricity into the ground, protecting it from getting shocked."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gigashock"
		},

		damage: 60,
		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond"
}

export default card
