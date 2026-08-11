import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Palossand"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [770],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Sandygast"
	},

	description: {
		'en-us': "From the hollows in its arms, it fires the bones\nof its victims, which are all dried up after being\ndrained of their vitality."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Life Sucker"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card