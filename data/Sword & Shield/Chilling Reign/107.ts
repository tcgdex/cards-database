import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Scolipede",
		fr: "Brutapode"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide"
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

		damage: 50,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Venoshock",
			fr: "Choc Venin"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "100+",
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