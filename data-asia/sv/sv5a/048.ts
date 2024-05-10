import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "カジッチュ",
		'zh-tw': "啃果蟲",
		th: "คาจิชชู"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [840],
	hp: 40,
	types: ["Dragon"],

	description: {
		ja: "りんごの 中で 暮らしている。 りんごが なくなると 体の 水分が 抜けて 弱ってしまう。",
		'zh-tw': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		th: "อาศัยอยู่ในแอปเปิล พอไม่มีแอปเปิลแล้ว จะสูญเสียน้ำในร่างกายและอ่อนแอลง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ともだちをさがす",
			'zh-tw': "尋找朋友",
			th: "หาพรรคพวก"
		},

		effect: {
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card