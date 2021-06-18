import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Metagross VMAX",
		fr: "Métalosse VMAX"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	evolveFrom: {
		en: "Metagross V",
		fr: "Métalosse-V"
	},

	attacks: [{
		name: {
			en: "Zap Traction",
			fr: "Magnétisation"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		},

		cost: ["Metal"]
	}, {
		name: {
			en: "Max Rush",
			fr: "Chargeomax"
		},

		effect: {
			en: "During your next turn, this Pokémon’s Max Rush attack does 150 more damage.",
			fr: "Pendant votre prochain tour, l’attaque Chargeomax de ce Pokémon inflige 150 dégâts supplémentaires."
		},

		damage: 100,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card