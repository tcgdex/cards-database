import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "パラセクト",
		'zh-tw': "派拉斯特",
		'zh-cn': "派拉斯特"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [47],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "背中の キノコが 育つほど ばらまかれる キノコの 胞子の 効果は 強力になる。",
		'zh-tw': "背上的蘑菇長得越大， 散播出來的蘑菇孢子 效果就越強。",
		'zh-cn': "背上的蘑菇長得越大， 散播出來的蘑菇孢子 效果就越強。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "キノコのほうし",
			'zh-tw': "蘑菇孢子",
			'zh-cn': "蘑菇孢子"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'zh-cn': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "シザースイング",
			'zh-tw': "橫掃剪",
			'zh-cn': "橫掃剪"
		},

		damage: "60+",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ追加。",
			'zh-tw': "擲2次硬幣，增加正面出現的次數×30點傷害。",
			'zh-cn': "擲2次硬幣，增加正面出現的次數×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card