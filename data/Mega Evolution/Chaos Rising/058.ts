import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886450,
				tcgplayer: 693543
			}
		},
	],

	name: {
		en: "Skrelp"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [690],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card