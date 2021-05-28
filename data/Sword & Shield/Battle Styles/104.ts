import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion"
	},

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Steel Slice",
			fr: "Acier Tranché"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Metal Pokémon, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "90+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card