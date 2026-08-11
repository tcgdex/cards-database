import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスの指令（ゲーチス）"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701559,
				tcgplayer: 568218,
			},
		},
	],

	trainerType: "Supporter"
}

export default card