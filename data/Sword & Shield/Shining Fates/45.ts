import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nostenfer VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Nostenfer-V"
	},

	attacks: [{
		name: {
			fr: "Poison Évasif"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			fr: "Tranchomax"
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card