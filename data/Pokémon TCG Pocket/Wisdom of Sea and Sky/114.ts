import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss"
	},

	illustrator: "Shiburingaru",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [430],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow"
	},

	description: {
		en: "It is merciless by nature. It is said that it never\nforgives the mistakes of its Murkrow followers.",
		fr: "Ce Pokémon impitoyable ne tolère aucun échec de la part de ses sbires, les Cornèbre."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card