import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Muk"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Grimer"
	},

	description: {
		en: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Power of Alchemy"
		},

		effect: {
			en: "Basic Pokémon in play (both yours and your opponent's) have no Abilities."
		}
	}],

	attacks: [{
		name: {
			en: "Sludge Bomb"
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