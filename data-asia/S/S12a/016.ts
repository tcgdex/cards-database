import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴火獸",
		th: "บูเบอร์",
		ja: "ブーバー"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用火焰解決獵物。但是一不留神就會把獵物 燒得太焦，然後才後悔。",
		th: "จัดการเหยื่อด้วยเปลวเพลิง เผลอทีไรก็จะเผาเสียจนไหม้เกรียมและรู้สึกเสียใจภายหลัง",
		ja: "炎で 獲物を しとめる。 ついつい 焼きすぎて 黒コゲに してしまい 後悔する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒",
			th: "เตะเลียด",
			ja: "けたぐり"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "火拳",
			th: "หมัดอัคคี",
			ja: "ほのおパンチ"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [126],

	thirdParty: {
		cardmarket: 687496
	}
}

export default card