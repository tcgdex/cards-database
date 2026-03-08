import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cryogonal"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "Cryogonal uses its chains of ice to constrict its\nopponents and then flash-freezes them where\nthey stand."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Frozen Lock"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card