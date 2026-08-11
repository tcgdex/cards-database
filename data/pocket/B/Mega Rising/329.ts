import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lilligant"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",

	dexId: [549],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Petilil"
	},

	description: {
		'en-us': "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Toughness Aroma"
		},

		effect: {
			'en-us': "Each of your {G} Pokémon gets +20 HP."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Smack"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card