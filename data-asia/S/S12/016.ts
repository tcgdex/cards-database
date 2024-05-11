import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎熱喵",
		th: "เนียฮีท",
		ja: "ニャヒート"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "如果牠的鬃毛直直豎立，代表牠的狀態很好。 狀態不好時，毛會向後倒下。",
		th: "เวลาที่ขนหน้าตั้งขึ้นเป็นหลักฐานแสดงว่ามันอยู่ในสภาพดี แต่ถ้าสภาพไม่ค่อยดี ขนจะล้มไปทางด้านหลัง",
		ja: "たてがみが ピンと 立っているときは 調子が良い 証拠。 具合が 悪いと 毛が後ろに 寝てしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "堅忍爪",
			th: "กรงเล็บยืนหยัด",
			ja: "ふんばりクロー"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【氣絕】時，這隻寶可夢不會【氣絕】，而是以剩餘HP為「10」的狀態留在場上。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ในตอนที่โปเกมอนนี้มี HP เต็ม ถ้าโปเกมอนนี้ได้รับแดเมจจากท่าต่อสู้และจะ[หมดสภาพ] โปเกมอนนี้จะไม่[หมดสภาพ] และจะอยู่บนกระดานด้วย HP ที่เหลือ [10]",
			ja: "次の相手の番、このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}, {
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้",
			ja: "かえん"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [726]
}

export default card