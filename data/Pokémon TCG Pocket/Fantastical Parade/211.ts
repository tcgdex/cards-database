import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Omanyte"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Helix Fossil"
	},

	description: {
		en: "Because some Omanyte manage to escape after\nbeing restored or are released into the wild by\npeople, this species is becoming a problem."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Gun"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card