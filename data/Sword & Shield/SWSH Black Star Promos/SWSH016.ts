import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon V",
		fr: "Lézargus V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Snipe Shot",
			fr: "Tir de Précision"
		},

		effect: {
			en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Aqua Report",
			fr: "Bilan Aquatique"
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire dévoile sa main."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card