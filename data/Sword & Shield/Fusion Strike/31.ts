import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		es: "Vulpix",
		it: "Vulpix",
		pt: "Vulpix",
		de: "Vulpix"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		en: "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Byway of the Nine-Tailed Fox"
		},

		effect: {
			en: "The Retreat Cost of each of your Pokémon that has any Fire Energy attached is ColorlessColorless less."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flame Tail"
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