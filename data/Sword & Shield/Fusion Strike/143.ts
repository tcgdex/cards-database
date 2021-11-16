import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Hariyama",
		fr: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		pt: "Hariyama",
		de: "Hariyama"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hitoshi Ariga",

	description: {
		en: "Hariyama that are big and fat aren't necessarily strong. There are some small ones that move nimbly and use moves skillfully."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Guts"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Hammer In"
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