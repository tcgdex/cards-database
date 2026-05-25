import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

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

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693461
			}
		}
	],
}

export default card