import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Roigada de Galar V",
		en: "Galarian Slowking V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Concoction",
			en: "Concoction"
		},

		effect: {
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			en: "Discard a card from your hand. If you do, draw 3 cards."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Promesse de Déclin",
			en: "Word of Ruin"
		},

		effect: {
			fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			en: "At the end of your opponent’s next turn, the Defending Pokémon will be Knocked Out."
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