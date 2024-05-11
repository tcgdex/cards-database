import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈空坐V",
		th: "เร็คควอซาV",
		ja: "レックウザV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "龍之波動",
			th: "คลื่นมังกร",
			ja: "りゅうのはどう"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方2張卡丟棄。",
			th: "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			ja: "自分の山札を上から2枚トラッシュする。"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "螺旋爆破",
			th: "สไปรัลเบิรสต์",
			ja: "スパイラルバースト"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的【火】或者【雷】任一屬性的最多2張基本能量卡丟棄，增加其張數×80點傷害。",
			th: "หากต้องการ ทิ้งการ์ดพลังงานพื้นฐานอย่างใดอย่างหนึ่งระหว่างประเภท [ไฟ] หรือ [สายฟ้า] ที่ติดอยู่กับโปเกมอนนี้ได้สูงสุด 2 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x80",
			ja: "のぞむなら、このポケモンについているまたはタイプのどちらかの基本エネルギーを2枚までトラッシュし、その枚数×80ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare"
}

export default card