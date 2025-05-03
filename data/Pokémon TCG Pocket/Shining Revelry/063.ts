import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung"
	},

	description: {
		en: "Lickilicky's strange tongue can stretch to many times the length of its body. No one has figured out how Lickilicky's tongue can stretch so far."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card