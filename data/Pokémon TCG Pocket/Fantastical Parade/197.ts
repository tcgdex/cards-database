import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Swampert ex"
	},

	illustrator: "nagimiso",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	evolveFrom: {
		en: "Marshtomp"
	},

	description: {
		en: "Its arms are hard as rock. With one swing, it can\nbreak an enormous boulder into pieces."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Strong-Armed Destroyer"
		},

		damage: 150,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card