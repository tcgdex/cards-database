import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パフュートン",
		'zh-tw': "飄香豚",
		'th-th': "เพอร์ฟูตง"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [916],
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "花のような 香りを 振りまく。 筋肉が 発達した 脚は 軽く ５メートルを 飛び越える。",
		'zh-tw': "會釋放出如花般的香氣。腿部肌肉發達，要跳超過５公尺高也是輕而易舉。",
		'th-th': "โปรยกลิ่นหอมดั่งดอกไม้ ขาที่มีกล้ามเนื้อที่พัฒนาแล้วสามารถกระโดดสูงกว่า 5 เมตรได้อย่างง่ายดาย"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "えりすぐり",
			'zh-tw': "特優",
			'th-th': "คัดสรรอย่างดี"
		},

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、手札に加える。",
			'zh-tw': "擲3次硬幣，從自己的棄牌區任意選擇最多與正面出現的次數相同數量的卡，在給對手看過後加入手牌。",
			'th-th': "ทอยเหรียญ 3 ครั้ง เลือกการ์ดที่ชอบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ได้สูงสุดไม่เกินจำนวนครั้งที่ออกหัว ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "パフュームプレス",
			'zh-tw': "芬香壓制",
			'th-th': "เพอร์ฟูมเพรส"
		},

		damage: 70,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 724052,
				tcgplayer: 567052,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card