import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "嗡蝠",
		th: "ออนแบท",
		ja: "オンバット"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'zh-tw': "每到太陽下山時，牠便會離開居住的洞窟四處飛行， 用超音波尋找熟透的果實。",
		th: "หลังพระอาทิตย์ตก จะบินออกจากถ้ำที่อาศัยอยู่แล้วปล่อยคลื่นอัลตราซาวด์ออกมาเพื่อหาผลไม้สุก",
		ja: "日が 暮れると すみかの 洞窟を 離れて 飛びまわり 完熟の 果物を 超音波で 探す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊",
			th: "ตีปีก",
			ja: "はばたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滑翔",
			th: "ถลาลม",
			ja: "かっくう"
		},

		damage: 30,
		cost: ["Psychic", "Darkness"]
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [714],

	thirdParty: {
		cardmarket: 680212
	}
}

export default card