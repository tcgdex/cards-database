import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lapyro",
		en: "Raboot"
	},

	illustrator: "Lee HyunJung",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		fr: "Flambino",
		en: "Scorbunny"
	},

	attacks: [{
		name: {
			fr: "Nitrocharge",
			en: "Flame Charge"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			fr: "Coup d’Pied Magnum",
			en: "Magnum Kick"
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