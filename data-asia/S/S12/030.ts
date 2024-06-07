import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傘電蜥",
		th: "เอลิคิเทล",
		ja: "エリキテル"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "當牠張開頭部的褶邊用太陽光發電，就能使出 威力強大的電屬性招式。",
		th: "เมื่อกางแผ่นที่หัวแล้วผลิตไฟฟ้าจากแสงอาทิตย์จะสามารถปล่อยท่าต่อสู้ไฟฟ้าที่มีพลังแรงได้",
		ja: "頭の ひだを 広げ 太陽の 光で 発電すると パワフルな 電気技を 出せるようになる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ",
			ja: "バチバチ"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "後踢",
			th: "เตะกลับหลัง",
			ja: "うしろげり"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [694]
}

export default card