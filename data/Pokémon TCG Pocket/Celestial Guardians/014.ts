import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Fomantis"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Fomantis hates having its naps interrupted. It fires off beams using energy it gathers by bathing in the sun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leafage"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card