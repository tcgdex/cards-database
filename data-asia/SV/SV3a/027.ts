import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "フカマル",
		'zh-tw': "圓陸鯊",
		th: "ฟุคามารุ"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [443],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
		'zh-tw': "潛伏在地洞內，如果有獵物或敵人經過，就會撲出來咬住。 有時會用力過猛而咬壞牙齒。",
		th: "ซ่อนตัวอยู่ในหลุมใต้ดิน ถ้ามีเหยื่อหรือศัตรูผ่านมาจะกระโดดกัด ใส่แรงมากไปจนบางครั้งฟันหัก"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card