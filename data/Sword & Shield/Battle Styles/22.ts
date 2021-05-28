import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Victini VMAX",
		fr: "Victini VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],

	evolveFrom: {
		en: "Victini V",
		fr: "Victini-V"
	},

	attacks: [{
		name: {
			en: "Spreading Flames",
			fr: "Flammes Rampantes"
		},

		effect: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Max Victory",
			fr: "Victoiromax"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Pokémon V, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card