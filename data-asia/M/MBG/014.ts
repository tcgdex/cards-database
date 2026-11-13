import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ポケモンいれかえ"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。"
	},

	trainerType: "Item",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846831,
				tcgplayer: 660130,
				cardtrader: 345822,
			},
		},
	]
}

export default card
