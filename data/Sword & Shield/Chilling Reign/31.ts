import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret"
	},

	attacks: [{
		name: {
			en: "Two-Hit KO",
			fr: "K.O. Double Frappe"
		},

		effect: {
			en: "During your next turn, if the Defending Pokémon is damaged by an attack from a Rapid Strike Pokémon, it will be Knocked Out.",
			fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d’une attaque d’un Pokémon Mille Poings, il sera mis K.O."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Nasty Plot",
			fr: "Machination"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card