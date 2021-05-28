import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Éthernatos V",
		en: "Eternatus V"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Accélérateur de Puissance",
			en: "Power Accelerator"
		},

		effect: {
			fr: "Vous pouvez attacher une carte Énergie Darkness de votre main à l’un de vos Pokémon de Banc.",
			en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Canon Dynamax",
			en: "Dynamax Cannon"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			en: "If your opponent’s Active Pokémon is a Pokémon VMAX, this attack does 120 more damage."
		},

		damage: "120+",
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card