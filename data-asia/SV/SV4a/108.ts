import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジオヅム",
		'zh-tw': "鹽石壘",
		th: "จีโอซึมู",
		id: "Naclstack"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [933],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "塩を 噴き出して 獲物に 浴びせ 塩漬けにしてしまう。 体内の 水分を 奪ってしまうのだ。",
		'zh-tw': "會將鹽噴向獵物，將其做成醃漬物。獵物體內的水分 會在醃漬過程中被奪走。",
		th: "พ่นเกลือใส่เหยื่อเพื่อหมักอีกฝ่ายด้วยเกลือ ช่วงชิงน้ำภายในร่างกายของอีกฝ่ายไป",
		id: "Naclstack menyemburkan garam dan menggaramkan mangsanya. Garam tersebut membuat lawan menderita dengan cara merenggut cairan dalam tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "しおキャノン",
			'zh-tw': "鹽加農炮",
			th: "ปืนใหญ่เกลือ",
			id: "Meriam Garam"
		},

		damage: "60×",

		effect: {
			ja: "コインを3回投げ、オモテの数×60ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×60點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card