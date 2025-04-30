import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Brionne"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Popplio"
	},

	description: {
		en: "It gets excited when it sees a dance it doesn't know. This hard worker practices diligently until it can learn that dance."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card