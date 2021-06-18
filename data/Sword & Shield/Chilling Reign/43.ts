import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Inteleon",
		fr: "Lézargus"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting",
			fr: "Tir Rapide"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent’s Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card