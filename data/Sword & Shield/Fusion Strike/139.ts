import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		de: "Stahlos"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "It is thought its body transformed as a result of iron accumulating internally from swallowing soil."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Powerful Rage"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthquake"
		},

		damage: 180,

		effect: {
			en: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
