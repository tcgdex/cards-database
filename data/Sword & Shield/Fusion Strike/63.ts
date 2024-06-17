import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [259],
	set: Set,

	name: {
		en: "Marshtomp",
		fr: "Flobio",
		es: "Marshtomp",
		it: "Marshtomp",
		pt: "Marshtomp",
		de: "Moorabbel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
		es: "Mudkip",
		it: "Mudkip",
		pt: "Mudkip",
		de: "Hydropi"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "Living on muddy ground that provides poor footing has made its legs sturdy."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mud-Slap"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Energy Loop"
		},

		damage: 80,

		effect: {
			en: "Put an Energy attached to this Pokémon into your hand."
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