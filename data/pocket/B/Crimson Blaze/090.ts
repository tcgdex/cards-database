import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [45],

	name: {
		'en-us': "Vileplume"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Gloom"
	},

	description: {
		'en-us': "It has the world's largest petals. With every step,\nthe petals shake out heavy clouds of toxic pollen."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Soothing Scent"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card