import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョフー",
		'zh-tw': "功夫鼬",
		th: "โคโจฟู",
		ko: "비조푸"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [619],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "小さくても 気性は 荒い。 油断して 近づく 相手には 華麗な 連打を おみまいする。",
		'zh-tw': "個頭雖小，個性粗暴。對於漫不經心就靠近自己 的對手會奉上華麗的連擊。",
		th: "ถึงแม้จะตัวเล็กแต่มีนิสัยดุดัน จะกระหน่ำตีด้วยลีลางดงามจัดการกับผู้ที่ไม่ระวังเผลอเข้าไปใกล้",
		ko: "작아도 기질은 거칠다. 방심하고 다가간 상대에게 화려한 연타를 먹인다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けたぐり",
			'zh-tw': "踢倒",
			th: "เตะเรียด",
			ko: "안다리걸기"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "せいけんづき",
			'zh-tw': "正拳突",
			th: "กำปั้นตรง",
			ko: "정권찌르기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741362
	}
}

export default card