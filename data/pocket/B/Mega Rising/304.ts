import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zeraora"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [807],
	hp: 90,
	types: ["Lightning"],

	description: {
		'en-us': "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thunderclap Flash"
		},

		effect: {
			'en-us': "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Lightning Claw"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card