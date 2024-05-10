import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ケルディオ",
		'zh-tw': "凱路迪歐",
		th: "เคลดิโอ"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [647],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "戦う 覚悟を 決めたことで 全身に 気力が みなぎり ケルディオの 姿を 変えた。",
		'zh-tw': "透過下定戰鬥的決心讓自己全身充滿力量， 並改變了自己的樣子。",
		th: "เมื่อตัดสินใจอย่างแน่วแน่ที่จะต่อสู้ พลังจะเอ่อขึ้นทั่วกายและร่างของเคลดิโอจะเปลี่ยนไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "クイックドロー",
			'zh-tw': "快速抽出",
			th: "ควิกดรอว์"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアブレード",
			'zh-tw': "水之利刃",
			th: "อควาเบลด"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card