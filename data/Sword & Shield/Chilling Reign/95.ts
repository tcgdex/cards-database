import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	attacks: [{
		name: {
			en: "Mixin’ Toxin",
			fr: "Cocktail de Toxines"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused. Attach a Darkness Energy card from your discard pile to this Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Smog Burst",
			fr: "Dégazage Polluant"
		},

		effect: {
			en: "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon."
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card