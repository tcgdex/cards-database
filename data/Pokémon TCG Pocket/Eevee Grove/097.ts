import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The horns on its head provide a strong power\nthat enables it to sense people's emotions."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Teleport"
		},

		cost: ["Colorless"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card