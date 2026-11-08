import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コジョフー",
		'zh-tw': "功夫鼬",
		'th-th': "โคโจฟู",
		'ko-kr': "비조푸"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [619],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "小さくても 気性は 荒い。 油断して 近づく 相手には 華麗な 連打を おみまいする。",
		'zh-tw': "個頭雖小，個性粗暴。對於漫不經心就靠近自己 的對手會奉上華麗的連擊。",
		'th-th': "ถึงแม้จะตัวเล็กแต่มีนิสัยดุดัน จะกระหน่ำตีด้วยลีลางดงามจัดการกับผู้ที่ไม่ระวังเผลอเข้าไปใกล้",
		'ko-kr': "작아도 기질은 거칠다. 방심하고 다가간 상대에게 화려한 연타를 먹인다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "けたぐり",
			'zh-tw': "踢倒",
			'th-th': "เตะเรียด",
			'ko-kr': "안다리걸기"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "せいけんづき",
			'zh-tw': "正拳突",
			'th-th': "กำปั้นตรง",
			'ko-kr': "정권찌르기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741362,
				tcgplayer: 565788,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card