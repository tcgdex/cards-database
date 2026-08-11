import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チョンチー",
		'zh-tw': "燈籠魚",
		'th-th': "ชอนชี"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [170],
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "暗い 海底では いつも 点滅している 触手の 灯り だけが 通信手段。",
		'zh-tw': "在黑暗的海底，觸手上不斷閃爍的亮光 是牠唯一的通訊手段。",
		'th-th': "ในก้นมหาสมุทรอันมืดมิด แสงจากหนวดที่กะพริบอย่างต่อเนื่องคือวิธีการเดียวที่ใช้สื่อสารกัน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "てらす",
			'zh-tw': "光照",
			'th-th': "ฉายแสง"
		},

		effect: {
			'ja-jp': "自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードを山札の下にもどす。",
			'zh-tw': "查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡放回牌庫下方。",
			'th-th': "ดูการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา คืนที่เดิมหากต้องการ นำการ์ดนั้นใส่กลับไปด้านล่างของสำรับการ์ด"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "プチでんき",
			'zh-tw': "小電氣",
			'th-th': "กระแสไฟน้อยนิด"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734251,
				tcgplayer: 566870,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card