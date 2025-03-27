import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Gholdengo"
	},

	illustrator: "Jerky",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Gimmighoul"
	},

	description: {
		en: "Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scintillating Surfing"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin for each  Energy attached to this Pokémon. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card