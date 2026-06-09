import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ケルディオ",
		'zh-tw': "凱路迪歐",
		th: "เคลดิโอ",
		ko: "케르디오"
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
		th: "เมื่อตัดสินใจอย่างแน่วแน่ที่จะต่อสู้ พลังจะเอ่อขึ้นทั่วกายและร่างของเคลดิโอจะเปลี่ยนไป",
		ko: "싸울 각오를 다지고 난 후 전신에 기력이 넘쳐흘러 케르디오의 모습이 바뀌었다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "クイックドロー",
			'zh-tw': "快速抽出",
			th: "ควิกดรอว์",
			ko: "퀵드로"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			ko: "자신의 덱을 2장 뽑는다."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアブレード",
			'zh-tw': "水之利刃",
			th: "อควาเบลด",
			ko: "아쿠아 블레이드"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752777
	}
}

export default card