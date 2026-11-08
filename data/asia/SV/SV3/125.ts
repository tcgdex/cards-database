import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リザードンex",
		'zh-tw': "噴火龍ex",
		'th-th': "ลิซาร์ดอนex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "れんごくしはい",
			'zh-tw': "煉獄支配",
			'th-th': "ปกครองแดนชำระล้าง"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張「基本【火】能量」卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "バーニングダーク",
			'zh-tw': "燃燒黑暗",
			'th-th': "เบิร์นนิงดาร์ก"
		},

		damage: "180+",

		effect: {
			'ja-jp': "相手がすでにとったサイドの枚数×30ダメージ追加。",
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x30"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724981,
				tcgplayer: 567079,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card