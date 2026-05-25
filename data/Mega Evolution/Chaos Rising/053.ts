import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886445,
				tcgplayer: 693549
			}
		},
	],

	name: {
		en: "Stunky"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [434],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		cost: ["Darkness"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card