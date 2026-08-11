import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray"
	},

	illustrator: "GIDORA",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [405],
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio"
	},

	description: {
		en: "Luxray's ability to see through objects comes in\nhandy when it's scouting for danger."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Flash Impact"
		},

		damage: 110,
		cost: ["Lightning", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-blaziken"]
}

export default card