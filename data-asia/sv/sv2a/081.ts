import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイル",
		'zh-tw': "小磁怪"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。",
		'zh-tw': "從左右兩邊的組件發出的電磁波能阻礙重力， 使牠浮在空中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "プチでんき",
			'zh-tw': "小電氣"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ばくはつ",
			'zh-tw': "爆炸"
		},

		damage: 60,

		effect: {
			ja: "このポケモンにも60ダメージ。",
			'zh-tw': "這隻寶可夢也受到60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card