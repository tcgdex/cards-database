import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nostenfer VMAX",
		en: "Crobat VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 300,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Nostenfer-V",
		en: "Crobat V"
	},

	attacks: [{
		name: {
			fr: "Poison Évasif",
			en: "Stealth Poison"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Échangez ce Pokémon contre l’un de vos Pokémon de Banc.",
			en: "Your opponent’s Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			fr: "Tranchomax",
			en: "Max Cutter"
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