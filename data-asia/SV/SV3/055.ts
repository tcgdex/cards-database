import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨーギラス",
		'zh-tw': "幼基拉斯",
		th: "โยกิราส"
	},

	illustrator: "KYUPIYAMA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [246],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
		'zh-tw': "誕生在地底深處。當牠吃完滿山的土壤後，就會為了成長而變成蛹。",
		th: "เกิดมาใต้ชั้นดินลึก พอกินดินเท่าภูเขาเข้าไปจะกลายเป็นดักแด้เพื่อเสริมสร้างร่างกายใหม่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊",
			th: "ต่อยตี"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決",
			th: "ตั้งใจสู้"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724002
	}
}

export default card