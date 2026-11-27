import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "kantaro",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmander"
	},

	description: {
		en: "It has a barbaric nature. In battle, it whips its\nfiery tail around and slashes away with sharp claws."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Claws"
		},

		damage: 60,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card