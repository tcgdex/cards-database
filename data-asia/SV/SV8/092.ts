import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミ"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [925],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファミリーマーチ"
		},

		effect: {
			ja: "自分の山札から「イッカネズミ（『ポケモンex』をふくむ）」を2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "れんぞくまえば"
		},

		damage: "30×",

		effect: {
			ja: "コインを4回投げ、オモテの数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card