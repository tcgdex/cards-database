import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch"
		},

		damage: 20
	}, {
		cost: ["Fire"],

		name: {
			en: "Fling Fire"
		},

		damage: "60×",

		effect: {
			en: "Discard up to 2 basic Energy cards from your hand. This attack does 60 damage for each card you discarded in this way."
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