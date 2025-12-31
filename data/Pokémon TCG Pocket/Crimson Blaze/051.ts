import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Steelix"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Onix"
	},

	description: {
		en: "It is thought its body transformed as a result of\niron accumulating internally from swallowing soil."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Defender"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon has no Weakness."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card