import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infiltrating Inspection"
		},

		effect: {
			en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may have your opponent reveal their hand."
		}
	}],

	attacks: [{
		name: {
			en: "Will-O-Wisp"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card