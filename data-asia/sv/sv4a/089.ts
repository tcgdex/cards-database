import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パピモッチ",
		'zh-tw': "狗仔包",
		th: "พาปิม็อตจิ",
		id: "Fidough"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [926],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		'zh-tw': "摸起來既濕潤又絲滑。吐出的氣息裡含有酵母， 可以使周圍的東西發酵。",
		th: "มีร่างกายที่ชุ่มชื้นและเรียบเนียนน่าสัมผัส หมักสิ่งที่อยู่รอบตัวด้วยยีสต์ซึ่งมาพร้อมกับลมหายใจ",
		id: "Tubuh Fidough empuk, halus, dan nyaman dipegang. Napasnya yang mengandung ragi dapat memfermentasikan benda-benda yang ada di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card