import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "It has a brave and trustworthy nature. It fearlessly\nstands up to bigger and stronger foes.",
		fr: "Courageux et fidèle, il se dresse vaillamment devant ses ennemis même s'ils sont plus puissants que lui."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card