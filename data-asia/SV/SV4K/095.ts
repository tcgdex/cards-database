import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "基本悪エネルギー",
		ko: "기본 악 에너지"
	},

	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741525,
				tcgplayer: 565850,
			},
		},
	],
}

export default card