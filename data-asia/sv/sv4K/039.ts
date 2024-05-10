import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ジオヅム",
		'zh-tw': "鹽石壘"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [933],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "塩を 噴き出して 獲物に 浴びせ 塩漬けにしてしまう。 体内の 水分を 奪ってしまうのだ。",
		'zh-tw': "會將鹽噴向獵物，將其做成醃漬物。獵物體內的水分 會在醃漬過程中被奪走。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "がんせきタックル",
			'zh-tw': "巨岩衝撞"
		},

		damage: 80,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card