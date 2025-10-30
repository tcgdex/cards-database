import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix"
	},

	description: {
		en: "Slurpuff's fur contains a lot of air, making it soft\nto the touch and lighter than it looks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Draining Kiss"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card