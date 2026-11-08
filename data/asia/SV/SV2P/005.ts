import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ユキカブリ",
		'zh-tw': "雪笠怪",
		'th-th': "ยูกิคาบูริ",
		'id-id': "Snover"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [459],
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。",
		'zh-tw': "在寒冷的季節裡會移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
		'th-th': "ในฤดูหนาวจะลงมาจนถึงตีนเขา เมื่อถึงฤดูใบไม้ผลิจะกลับขึ้นไปยังยอดเขาที่ยังมีหิมะเหลืออยู่",
		'id-id': "Selama musim dingin, Snover turun ke kaki gunung dan kembali ke puncak yang tertutup salju di musim semi."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "どつく",
			'zh-tw': "推擊",
			'th-th': "ต่อยตี",
			'id-id': "Menohok"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705238,
				tcgplayer: 567762,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card