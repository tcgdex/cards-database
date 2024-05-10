import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ホルード",
		'zh-tw': "掘地兔",
		th: "โฮรูโด"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	dexId: [660],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "お腹の 体毛は 保温性に 優れる。 昔の 人は 抜けた 体毛で 防寒着を つくった。",
		'zh-tw': "肚子上的體毛保溫性能優秀。在過去，人們會用牠掉落的毛來製作保暖服裝。",
		th: "ขนที่ท้องช่วยเก็บความร้อนได้ดีมาก คนในสมัยก่อนเคยเอาขนที่ร่วงมาทำชุดกันหนาว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どろかけ",
			'zh-tw': "擲泥",
			th: "สาดโคลน"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ノックハンマー",
			'zh-tw': "敲擊之錘",
			th: "น็อกแฮมเมอร์"
		},

		damage: 120,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card