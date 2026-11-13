import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバット"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	dexId: [714],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "かぜおこし"
		},

		damage: 40,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746516,
				tcgplayer: 567535,
				cardtrader: 269720,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577371,
			},
		},
	]
}

export default card
