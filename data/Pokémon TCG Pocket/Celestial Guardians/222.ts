import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar"
	},

	illustrator: "kurumitsu",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	description: {
		en: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bother"
		},

		damage: 50,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card