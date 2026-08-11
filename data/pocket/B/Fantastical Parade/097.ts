import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [89],

	name: {
		'en-us': "Alolan Muk"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Alolan Grimer"
	},

	description: {
		'en-us': "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Power of Alchemy"
		},

		effect: {
			'en-us': "Basic Pokémon in play (both yours and your opponent's) have no Abilities."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Sludge Bomb"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card