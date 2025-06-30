import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Whiscash"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Barboach"
	},

	description: {
		en: "It is extremely protective of its territory. If any\nfoe approaches, it attacks using vicious tremors."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Earthquake"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card