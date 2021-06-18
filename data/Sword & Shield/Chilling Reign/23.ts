import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge"
		},

		effect: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck."
		},

		damage: 10,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card