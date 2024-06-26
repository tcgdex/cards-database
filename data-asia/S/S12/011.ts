import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈焰馬",
		th: "แกลล็อป",
		ja: "ギャロップ"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度 在大草原上自在奔馳。",
		th: "วิ่งตัดทุ่งหญ้ากว้างใหญ่ด้วยความเร็ว 240 กิโลเมตรต่อชั่วโมง พร้อมกับแผงขนที่ลุกโชนไปด้วยเปลวเพลิงพลิ้วไสว",
		ja: "燃える たてがみを はためかせ 時速 ２４０キロの 速度で 大草原を 駆けぬけるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "高溫突進",
			th: "ฮีตบูสต์",
			ja: "ヒートブースト"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張【火】能量卡丟棄，則可使用1次。在這個回合，自己的【火】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ดพลังงาน[ไฟ] 1 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด จะสามารถใช้ได้ 1 ครั้ง เทิร์นนี้ แดเมจของท่าต่อสู้ที่โปเกมอน[ไฟ]ฝ่ายเราใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะถูก [+30]",
			ja: "自分の番に、自分の手札からエネルギーを1枚トラッシュするなら、1回使える。この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火之鬃",
			th: "แผงคอไฟ",
			ja: "ほのおのたてがみ"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [78]
}

export default card