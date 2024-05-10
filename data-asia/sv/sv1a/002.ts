import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマゲタケ",
		'zh-tw': "哎呀球菇"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [590],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "モンスターボールの 開発者は タマゲタケが 好きだったという 説が あるが 真偽は 不明。",
		'zh-tw': "據說開發精靈球的人很喜歡哎呀球菇， 但不知是真是假。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "もようでつる",
			'zh-tw': "花紋吸睛"
		},

		effect: {
			ja: "自分の山札からタイプのたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【草】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card