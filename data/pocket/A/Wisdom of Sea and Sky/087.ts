import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Girafarig",
		'fr-fr': "Girafarig"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [203],
	hp: 80,
	types: ["Psychic"],

	description: {
		'en-us': "Girafarig's tail has a small head. It instinctively\nbites at any foe that approaches the Pokémon\nfrom behind.",
		'fr-fr': "Girafarig a une autre petite tête sur sa queue qui mord instinctivement les ennemis qui s'approchent par l'arrière."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psybeam",
			'fr-fr': "Rafale Psy"
		},

		damage: 50,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card