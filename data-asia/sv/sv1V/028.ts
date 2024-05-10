import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ジバコイルex",
		'zh-tw': "自爆磁怪ex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エナジークラッシュ",
			'zh-tw': "能量粉碎"
		},

		damage: 50,

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×50ダメージ。",
			'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×50點傷害。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "パルスランチャー",
			'zh-tw': "脈衝發射器"
		},

		damage: 220,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card