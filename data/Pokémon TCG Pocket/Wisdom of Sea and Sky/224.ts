import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
		fr: "Nidorina"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidoran♀"
	},

	description: {
		en: "The horn on its head has atrophied. It's thought\nthat this happens so Nidorina's children won't get\npoked while their mother is feeding them.",
		fr: "On pense que sa corne frontale s'est atrophiée pour lui permettre de nourrir ses petits sans les blesser."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
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