import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			en: "Metal Arms"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card