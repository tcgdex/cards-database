import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏鴉頭頭",
		ja: "ドンカラス"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "與敵人的戰鬥幾乎全由手下來應付。只有在最後給對手致命一擊的時候，才會弄髒自己的手。",
		ja: "敵と 戦うのは ほぼ 子分。 自分の 手を 汚すのは 相手に 最後の 止めを 刺すときだけ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄",
			ja: "つつく"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暗黑旋風",
			ja: "ナイトサイクロン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的所有能量，以任意方式改附於備戰寶可夢身上。",
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。"
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [430]
}

export default card