import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロスex",
		'zh-tw': "美納斯ex",
		'zh-cn': "美納斯ex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きらめくウロコ",
			'zh-tw': "‌璀璨鱗片",
			'zh-cn': "‌璀璨鱗片"
		},

		effect: {
			ja: "このポケモンは、相手の「テラスタル」のポケモンからワザのダメージや効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的「太晶」寶可夢招式的傷害與效果的影響。",
			'zh-cn': "這隻寶可夢不會受到對手的「太晶」寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ヒプノスプラッシュ",
			'zh-tw': "昏睡飛濺",
			'zh-cn': "昏睡飛濺"
		},

		damage: 160,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'zh-cn': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793460
	}
}

export default card