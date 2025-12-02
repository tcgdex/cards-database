import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgey",
		fr: "Roucool"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	dexId: [16],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "A common sight in forests and woods. It flaps\nits wings at ground level to kick up blinding sand.",
		fr: "On l'aperçoit souvent dans les forêts. Avec ses ailes, il brasse l'air près du sol pour projeter du sable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gust",
			fr: "Tornade"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card