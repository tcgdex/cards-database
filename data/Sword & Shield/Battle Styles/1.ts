import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Venoshock",
			fr: "Choc Venin"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card