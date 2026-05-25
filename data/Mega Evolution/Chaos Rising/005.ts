import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886397,
				tcgplayer: 693461
			}
		},
	],

	name: {
		en: "Chespin"
	},

	illustrator: "HACCAN",
	rarity: "Common",
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