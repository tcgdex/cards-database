import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Signs of Evolution"
		},

		cost: ["Fighting"],

		effect: {
			en: "Put a random card that evolves from Rockruff from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card