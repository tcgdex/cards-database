import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "怖いお兄さん"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "相手のポケモンを1匹選び、そのポケモンについている「ポケモンのどうぐ」と「特殊エネルギー」を1枚ずつトラッシュする。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807709,
				tcgplayer: 614998,
			},
		},
	],

	trainerType: "Supporter"
}

export default card