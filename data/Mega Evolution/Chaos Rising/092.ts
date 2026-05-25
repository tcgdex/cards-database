import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886484,
				tcgplayer: 693467
			}
		},
	],

	name: {
		en: "Claydol"
	},

	illustrator: "matazo",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [344],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Baltoy"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Devolution Ray"
		},

		cost: ["Fighting"],
		damage: 50,

		effect: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card