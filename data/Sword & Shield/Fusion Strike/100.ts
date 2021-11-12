import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Vise Grip"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Head Bolt"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card