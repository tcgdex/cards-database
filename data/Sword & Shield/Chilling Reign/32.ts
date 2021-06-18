import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Icy Snow",
			fr: "Verglas"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			en: "Package Delivery",
			fr: "Livraison de Colis"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your deck. If you do, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Ajoutez à votre deck ce Pokémon et toutes les cartes attachées. Dans ce cas, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card