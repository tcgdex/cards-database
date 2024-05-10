import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "エリキテル",
		'zh-tw': "傘電蜥",
		th: "เอลิคิเทล"
	},

	illustrator: "Taiga Kayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [694],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "頭の ひだを 広げ 太陽の 光で 発電すると パワフルな 電気技を 出せるようになる。",
		'zh-tw': "當牠張開頭部的褶邊用太陽光發電，就能使出 威力強大的電屬性招式。",
		th: "เมื่อกางแผ่นที่หัวแล้วผลิตไฟฟ้าจากแสงอาทิตย์จะสามารถปล่อยท่าไฟฟ้าที่รุนแรงได้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる",
			'zh-tw': "呼喚",
			th: "รวบรวม"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "バチバチ",
			'zh-tw': "劈哩啪啦",
			th: "ประกายไฟ"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card