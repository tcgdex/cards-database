import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Whirlipede",
		fr: "Scobolide"
	},

	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte"
	},

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card