import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cutiefly"
	},

	illustrator: "kamonabe",
	rarity: "One Star",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "Nectar and pollen are its favorite fare. In fields of flowers, it gets into skirmishes with Butterfree over food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 0
}

export default card