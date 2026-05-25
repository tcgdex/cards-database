import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886479,
				tcgplayer: 693462
			}
		},
	],

	name: {
		en: "Chespin"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [650],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat"
		},

		cost: ["Grass"],
		damage: 10
	}, {
		name: {
			en: "Spike Sting"
		},

		cost: ["Grass"],
		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card