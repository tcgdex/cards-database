import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帕路奇亞V",
		th: "พัลเกียดั้งเดิมV",
		ja: "オリジンパルキアV"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "領域支配",
			th: "ปกครองอาณาเขต",
			ja: "りょういきしはい"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水炮破壞",
			th: "ไฮโดรเบรก",
			ja: "ハイドロブレイク"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 200,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card