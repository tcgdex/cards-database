import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Gather Food",
			fr: "Approvisionnement"
		},

		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Hangry Tackle",
			fr: "Charge Affamée"
		},

		effect: {
			en: "If you have no cards in your hand, this attack does 90 more damage.",
			fr: "Si vous n’avez aucune carte dans votre main, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card