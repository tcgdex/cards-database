import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tournicoton",
		en: "Gossifleur"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Appel à la Famille",
			en: "Call for Family"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Tranch’Herbe",
			en: "Razor Leaf"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card