import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Nosepass"
	},

	description: {
		en: "It exudes strong magnetism from all over.\nIt controls three small units called Mini-Noses."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metallic Turbo"
		},

		damage: 40,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card