import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "イベルタル",
		'zh-tw': "伊裴爾塔爾"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	dexId: [717],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "寿命が つきるとき あらゆる 生き物の 命を 吸いつくし 繭の 姿に 戻るという。",
		'zh-tw': "據說當生命走到盡頭時， 會吸光所有生物的生命， 回到繭的狀態。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふりおろす",
			'zh-tw': "揮擊"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、60ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加60點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ダークエッジ",
			'zh-tw': "暗黑刀鋒"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card