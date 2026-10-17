import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [843],
	rarity: "Common",
	set: Set,

	name: {
		ja: "スナヘビ",
		'zh-tw': "沙包蛇",
		th: "ซึนะเฮบิ"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "鼻の 穴から 砂を 噴射。 敵の 目を くらました 隙に 地中に 潜って 身を 隠す。",
		'zh-tw': "會從鼻孔噴射出沙子，趁敵人看不清的時候躲進地底下藏身。",
		th: "พ่นทรายออกมาจากรูจมูก ฉวยโอกาสตอนที่ทำให้ศัตรูตาพร่ามัว มุดลงไปใต้ดินซ่อนตัว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "しっぽではたく",
			'zh-tw': "擺尾拍擊",
			th: "สะบัดหาง"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "マッドショット",
			'zh-tw': "泥巴射擊",
			th: "มัดช็อต"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533807, tcgplayer: 569088, cardtrader: 240056 } }
	]
}

export default card