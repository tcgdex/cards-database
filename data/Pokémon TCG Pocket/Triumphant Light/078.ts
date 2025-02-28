import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Unown"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Its flat, thin body is always stuck on walls. Its shape<br />appears to have some meaning."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "CHECK"
		},

		effect: {
			en: "Once during your turn, you may choose either player. Look at the top card of that player's deck."
		}
	}],

	attacks: [{
		name: {
			en: "Hidden Power"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card