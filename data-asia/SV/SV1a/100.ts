import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスの指令（ゲーチス）"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701564,
				tcgplayer: 568223,
			},
		},
	],

	trainerType: "Supporter"
}

export default card