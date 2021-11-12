import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Morgrem",
		fr: "Fourbelin",
		es: "Morgrem",
		it: "Morgrem",
		pt: "Morgrem",
		de: "Pelzebub"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Impidimp",
		fr: "Grimalin",
		es: "Impidimp",
		it: "Impidimp",
		pt: "Impidimp",
		de: "Bähmon"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		en: "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bite"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Crushing Blow"
		},

		damage: 40,

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
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