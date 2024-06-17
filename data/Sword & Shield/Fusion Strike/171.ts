import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		en: "If it thinks humans are going to discover its den, Zoroark shows them visions that make them wander around in the woods."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Claw"
		},

		damage: "40×",

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Night Daze"
		},

		damage: 100
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card