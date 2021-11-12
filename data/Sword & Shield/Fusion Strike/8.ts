import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		es: "Simisage",
		it: "Simisage",
		pt: "Simisage",
		de: "Vegichita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
		es: "Pansage",
		it: "Pansage",
		pt: "Pansage",
		de: "Vegimak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Return"
		},

		damage: 30,

		effect: {
			en: "You may draw cards until you have 6 cards in your hand."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Whip Smash"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card