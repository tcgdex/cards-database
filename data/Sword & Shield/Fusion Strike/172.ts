import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		it: "Vullaby",
		pt: "Vullaby",
		de: "Skallyk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shigenori Negishi",

	description: {
		en: "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Razor Wing"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Air Slash"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy from this Pokémon."
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