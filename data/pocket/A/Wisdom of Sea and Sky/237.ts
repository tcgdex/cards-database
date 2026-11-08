import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mismagius ex",
		'fr-fr': "Magirêve-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [429],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Magical Delusion",
			'fr-fr': "Voyage Magique"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

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