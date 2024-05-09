import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	dexId: [925],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ビンタ"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ファミリーアタック"
		},

		damage: "70×",

		effect: {
			ja: "自分の場の「イッカネズミ」の数×70ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card