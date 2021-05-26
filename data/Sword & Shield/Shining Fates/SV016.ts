import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lapyro"
	},

	illustrator: "Lee HyunJung",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		fr: "Flambino"
	},

	attacks: [{
		name: {
			fr: "Nitrocharge"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			fr: "Coup d’Pied Magnum"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card