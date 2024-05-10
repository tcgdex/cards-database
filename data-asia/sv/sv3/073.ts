import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソルex",
		'zh-tw': "阿勃梭魯ex",
		th: "แอบโซลex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "みらいよち",
			'zh-tw': "預知未來",
			th: "รู้ล่วงหน้า"
		},

		effect: {
			ja: "自分または相手の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			'zh-tw': "查看自己或者對手的牌庫上方3張卡，以任意順序排列，放回牌庫上方。",
			th: "ดูการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเราหรือฝ่ายตรงข้าม เรียงตามลำดับที่ชอบ ใส่กลับไปด้านบนของสำรับการ์ด"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カースドスラッグ",
			'zh-tw': "咒詛猛擊",
			th: "กระสุนต้องสาป"
		},

		damage: "100+",

		effect: {
			ja: "相手の手札が3枚以下なら、120ダメージ追加。",
			'zh-tw': "若對手的手牌為3張以下，則增加120點傷害。",
			th: "ถ้าการ์ดบนมือฝ่ายตรงข้ามน้อยกว่าหรือเท่ากับ 3 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card