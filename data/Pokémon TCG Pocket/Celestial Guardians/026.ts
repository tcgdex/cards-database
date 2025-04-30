import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Growlithe"
	},

	description: {
		en: "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Mane"
		},

		damage: 80,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card