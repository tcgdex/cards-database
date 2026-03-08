import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magby",
		fr: "Magby"
	},

	illustrator: "Makura Tami",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		en: "This Pokémon is still small and timid.\nWhenever Magby gets excited or surprised,\nflames leak from its mouth and its nose.",
		fr: "Ce n'est encore qu'un petit Pokémon craintif. Lorsqu'il est excité ou étonné, du feu s'échappe de son nez ou de sa bouche."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Toasty Toss",
			fr: "Lancer qui Réchauffe"
		},

		effect: {
			en: "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
			fr: "Prenez une Énergie {R} de votre zone Énergie et attachez-la à un de vos Pokémon de base de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card