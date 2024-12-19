import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		en: "Donphan"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Exoskeleton"
		},

		effect: {
			en: "Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Earthquake"
		},

		effect: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Heavy Impact"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	retreat: 4,
	suffix: "Prime",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy",
		de: "Phanpy"
	}
}

export default card
