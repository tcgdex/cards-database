import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [431],
	rarity: "Common",
	set: Set,

	name: {
		ja: "ニャルマー",
		'zh-tw': "魅力喵",
		th: "เนียรุมา"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ご機嫌な ニャルマーは 尻尾で 新体操の リボンのような 美しい 動きを 見せる。",
		'zh-tw': "魅力喵心情好的時候，會用尾巴展現像韻律體操的彩帶般的美麗動作。",
		th: "เนียรุมาที่อารมณ์ดีจะใช้หางเคลื่อนไหวอย่างงดงามเหมือนกับริบบิ้นในกีฬายิมนาสติก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ねこキック",
			'zh-tw': "喵踢",
			th: "ลูกเตะแมวเหมียว"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533857, tcgplayer: 569098, cardtrader: 240068 } }
	]
}

export default card