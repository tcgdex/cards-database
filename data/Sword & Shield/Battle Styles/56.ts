import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink"
	},

	attacks: [{
		name: {
			en: "Dazzle Dance",
			fr: "Danse Éblouissante"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3
}

export default card