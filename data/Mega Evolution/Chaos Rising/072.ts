import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886464,
				tcgplayer: 693525
			}
		},
	],

	name: {
		en: "Minccino"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [572],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Take Down"
		},

		cost: ["Colorless"],
		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card