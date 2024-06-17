import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [569],
	set: Set,

	name: {
		en: "Garbodor",
		fr: "Miasmax",
		es: "Garbodor",
		it: "Garbodor",
		pt: "Garbodor",
		de: "Deponitox"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish",
		fr: "Miamiasme",
		es: "Trubbish",
		it: "Trubbish",
		pt: "Trubbish",
		de: "Unratütox"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		en: "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Gas"
		},

		damage: 30,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Sludge Whirlpool"
		},

		damage: 130
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card