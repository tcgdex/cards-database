import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Ralts",
		fr: "Tarsal"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [280],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The horns on its head provide a strong power\nthat enables it to sense people's emotions.",
		fr: "Il perçoit très précisément les émotions humaines grâce aux cornes rouges sur sa tête."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Teleport",
			fr: "Téléport"
		},

		cost: ["Colorless"],

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card