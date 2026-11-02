import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal ex",
		fr: "Melmetal-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [809],
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			en: "Metal Arms",
			fr: "Bras Métalliques"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires."
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