import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty"
	},

	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty"
	},

	description: {
		en: "It dislikes dirty places. It often searches for a comfortable place in which to groom itself."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Assist"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Take a Colorless Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
