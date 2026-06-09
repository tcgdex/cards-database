import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "タッツー",
		'zh-tw': "墨海馬",
		th: "ทัททู",
		ko: "쏘드라"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "水中を 踊るように 泳いで 渦を つくる。 仲間と 渦の 大きさを 競って 遊ぶ。",
		'zh-tw': "會在水中跳舞似地游動來製造漩渦。玩耍時會和夥伴 比賽誰做出的漩渦比較大。",
		th: "ว่ายน้ำราวกับเต้นระบำอยู่ในน้ำทำให้เกิดน้ำวน จะแข่งกับพวกพ้องสร้างน้ำวนขนาดใหญ่เล่นกัน",
		ko: "물속에서 춤추듯이 헤엄쳐 소용돌이를 만든다. 동료와 소용돌이의 크기를 겨루며 논다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひっかける",
			'zh-tw': "鉤住",
			th: "จับแขวน",
			ko: "걸기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741313
	}
}

export default card