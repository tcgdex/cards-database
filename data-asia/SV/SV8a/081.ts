import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "フカマル",
		id: "Gible",
		th: "ฟุคามารุ",
		'zh-tw': "圓陸鯊",
		'zh-cn': "圓陸鯊"
	},

	illustrator: "saino misaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [443],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
		id: "Gible menerjang lalu menggigit mangsa dan musuh yang melewati sarangnya. Terkadang giginya terlepas akibat menggigit terlalu kuat.",
		th: "ซ่อนตัวอยู่ในหลุมใต้ดิน ถ้ามีเหยื่อหรือศัตรูผ่านมาจะกระโดดกัด ใส่แรงมากไปจนบางครั้งฟันหัก",
		'zh-tw': "潛伏在地洞內，如果有獵物 或敵人經過，就會撲出來咬住。 有時會用力過猛而咬壞牙齒。",
		'zh-cn': "潛伏在地洞內，如果有獵物 或敵人經過，就會撲出來咬住。 有時會用力過猛而咬壞牙齒。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かみつく",
			id: "Menggigit",
			th: "กัดติด",
			'zh-tw': "咬住",
			'zh-cn': "咬住"
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