import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886432,
				tcgplayer: 693536
			}
		},
	],

	name: {
		en: "Pumpkaboo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [710],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		cost: ["Psychic"],
		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card