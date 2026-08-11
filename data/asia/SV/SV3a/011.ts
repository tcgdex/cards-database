import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヘイラッシャ",
		'zh-tw': "吃吼霸",
		'th-th': "เฮรัชเชอร์"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [977],
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "大食らいだが エサを 取るのは 苦手。 シャリタツと コンビを 組んで 獲物を 捕らえるのだ。",
		'zh-tw': "雖然是個大胃王，但不擅長捕食。 會和米立龍聯手捕捉獵物。",
		'th-th': "เป็นโปเกมอนที่ตะกละแต่กลับหาอาหารไม่เก่ง มักจับคู่กับชาริทัตสึเพื่อจับเหยื่อ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "まるのみほきゅう",
			'zh-tw': "大口吞補給",
			'th-th': "เขมือบเติมเต็ม"
		},

		effect: {
			'ja-jp': "自分の山札を上から5枚見て、その中から基本エネルギーを好きなだけ選び、このポケモンにつける。残りのカードは山札にもどして切る。",
			'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇任意數量的基本能量卡，附於這隻寶可夢身上。將剩餘卡放回牌庫並重洗。",
			'th-th': "ดูการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดพลังงานพื้นฐานจากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนนี้ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ハイドロスプラッシュ",
			'zh-tw': "水炮濺射",
			'th-th': "ไฮโดรสแปลช"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734250,
				tcgplayer: 566869,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card