import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Froakie"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It secretes flexible bubbles from its chest and back.\nThe bubbles reduce the damage it would otherwise\ntake when attacked."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card