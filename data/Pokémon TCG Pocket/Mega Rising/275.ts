import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex"
	},

	illustrator: "Raita Kazama",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Frogadier"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Shifting Stream"
		},

		effect: {
			en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Edge"
		},

		damage: 100,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card