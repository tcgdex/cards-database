import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity V",
		fr: "Salarsen V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Energize",
			fr: "Énergisant"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Venom Slap",
			fr: "Gifle Envenimée"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card