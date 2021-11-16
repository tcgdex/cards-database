import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Breloom",
		fr: "Chapignon",
		es: "Breloom",
		it: "Breloom",
		pt: "Breloom",
		de: "Kapilz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
		es: "Shroomish",
		it: "Shroomish",
		pt: "Shroomish",
		de: "Knilz"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		en: "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Headbutt"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Impact Blow"
		},

		damage: 150,

		effect: {
			en: "During your next turn, this Pokémon can't use Impact Blow."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card