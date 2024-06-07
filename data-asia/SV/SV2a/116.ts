import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
		th: "ทัททู",
		id: "Horsea"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "水中を 踊るように 泳いで 渦を つくる。 仲間と 渦の 大きさを 競って 遊ぶ。",
		'zh-tw': "會在水中跳舞似地游動來製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。",
		th: "ว่ายน้ำราวกับเต้นระบำอยู่ในน้ำทำให้เกิดน้ำวน จะแข่งกับพวกพ้องสร้างน้ำวนขนาดใหญ่เล่นกัน",
		id: "Horsea berenang bagaikan menari di dalam air dan membuat pusaran. Mereka bermain dengan bertanding siapa yang membuat pusaran paling besar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずかけ",
			'zh-tw': "潑水",
			th: "สาดน้ำ",
			id: "Guyuran Air"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "するどいひれ",
			'zh-tw': "銳利鰭",
			th: "ครีบแหลมคม",
			id: "Sirip Tajam"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card