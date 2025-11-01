import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius ex",
		fr: "Magirêve-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Magical Delusion",
			fr: "Voyage Magique"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
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