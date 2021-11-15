import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		en: "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dark Cutter"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Single Strike Wings"
		},

		damage: 110
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card