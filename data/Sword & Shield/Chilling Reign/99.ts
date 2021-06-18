import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowking V",
		fr: "Roigada de Galar V"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Concoction",
			fr: "Concoction"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Word of Ruin",
			fr: "Promesse de Déclin"
		},

		effect: {
			en: "At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out.",
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O."
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card