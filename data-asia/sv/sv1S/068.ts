import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パフュートンex",
		'zh-tw': "飄香豚ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きょうらんのかおり",
			'zh-tw': "狂亂香氣"
		},

		damage: "10+",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビースタンプ",
			'zh-tw': "重磅踩踏"
		},

		damage: 210,

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card