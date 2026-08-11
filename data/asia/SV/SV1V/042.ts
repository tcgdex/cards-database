import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フラベベ",
		'zh-tw': "花蓓蓓",
		'th-th': "ฟลาเบเบ",
		'id-id': "Flabébé"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [669],
	hp: 40,
	types: ["Psychic"],

	description: {
		'ja-jp': "赤い花に 乗った フラベベ。 生まれると すぐに お気に入りの 花を 探すために 飛びまわる。",
		'zh-tw': "乘著紅花的花蓓蓓。從出生那刻開始就會為了 尋找喜歡的花而四處飛行。",
		'th-th': "ฟลาเบเบที่ขี่ดอกไม้สีแดง พอเกิดก็จะรีบบินไปมาเพื่อหาดอกไม้ที่ถูกใจทันที",
		'id-id': "Flabébé yang menunggangi bunga merah. Begitu lahir, ia langsung terbang berkeliling untuk mencari bunga favoritnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "かふんだま",
			'zh-tw': "花粉彈",
			'th-th': "ลูกปืนเรณู",
			'id-id': "Tembakan Serbuk Sari"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693117,
				tcgplayer: 568268,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card