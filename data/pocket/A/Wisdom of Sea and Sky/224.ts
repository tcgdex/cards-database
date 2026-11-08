import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [30],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Nidoran♀"
	},

	description: {
		'en-us': "The horn on its head has atrophied. It's thought\nthat this happens so Nidorina's children won't get\npoked while their mother is feeding them.",
		'fr-fr': "On pense que sa corne frontale s'est atrophiée pour lui permettre de nourrir ses petits sans les blesser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card