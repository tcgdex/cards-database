import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [417],
	rarity: "Common",
	set: Set,

	name: {
		ja: "パチリス",
		'zh-tw': "帕奇利茲",
		th: "พาจิริซึ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。",
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴而互相摩擦頰囊的帕奇利茲。",
		th: "บางทีก็พบเห็นพาจิริซึ ใช้ถุงแก้มเสียดสีกันเพื่อแบ่งไฟฟ้าที่เก็บสะสมไว้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ともだちをさがす",
			'zh-tw': "尋找朋友",
			th: "หาพรรคพวก"
		},

		effect: {
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533737, tcgplayer: 569074, cardtrader: 240038 } }
	]
}

export default card