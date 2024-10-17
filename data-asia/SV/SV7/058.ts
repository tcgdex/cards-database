import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒂安希",
		'zh-cn': "蒂安希",
		ja: "ディアンシー"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "小碎鑽的突變種。 散發著粉紅光輝的身體 被譽為世界第一美麗。",
		'zh-cn': "小碎鑽的突變種。 散發著粉紅光輝的身體 被譽為世界第一美麗。",
		ja: "メレシーの 突然変異。 ピンク色に 輝く 体は 世界一 美しいと 言われる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "漫反射",
			'zh-cn': "漫反射",
			ja: "らんはんしゃ"
		},

		effect: {
			'zh-tw': "造成對手的所有寶可夢身上附加的特殊能量卡的張數×40點傷害。",
			'zh-cn': "造成對手的所有寶可夢身上附加的特殊能量卡的張數×40點傷害。",
			ja: "相手のポケモン全員についている特殊エネルギーの枚数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "力量寶石",
			'zh-cn': "力量寶石",
			ja: "パワージェム"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [719]
}

export default card