import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラカラ",
		'zh-tw': "卡拉卡拉"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "死んだ 母親の 骨を 被る。 夢を 見て 泣くことも あるけど 涙を 流すたびに 強くなる。",
		'zh-tw': "頭上戴著死去母親的頭骨。雖然有時會因為作夢而哭泣， 但每次流淚後都會變得更強。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おうえんボーン",
			'zh-tw': "加油骨"
		},

		effect: {
			ja: "このポケモンがベンチにいるかぎり、自分の「ガラガラ」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			'zh-tw': "只要這隻寶可夢在備戰區，自己的「嘎啦嘎啦」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "にどたたき",
			'zh-tw': "二連敲"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card