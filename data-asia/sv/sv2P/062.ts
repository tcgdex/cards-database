import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキング",
		'zh-tw': "請假王"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [289],
	hp: 180,
	types: ["Colorless"],

	description: {
		ja: "世界一の ぐうたらだが 溜まった エネルギーを 一気に 出すことで 恐ろしい パワーを 発揮する。",
		'zh-tw': "雖然是世界上最懶散的寶可夢，但能藉由把積蓄的能量一次釋放， 發揮出驚人的力量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にどね",
			'zh-tw': "回籠覺"
		},

		effect: {
			ja: "ポケモンチェックのとき、このポケモンのねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。",
			'zh-tw': "在寶可夢檢查時，因這隻寶可夢的【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ぐうたらヘッドバット",
			'zh-tw': "懶散頭撞"
		},

		damage: 240,

		effect: {
			ja: "このポケモンをねむりにする。",
			'zh-tw': "將這隻寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card