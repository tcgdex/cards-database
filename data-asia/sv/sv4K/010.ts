import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ブビィ",
		'zh-tw': "鴨嘴寶寶",
		th: "บูบี"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		ja: "火山の まわりに 棲んでいる。 １日の 終わりには マグマに 浸かり 疲れを 癒している。",
		'zh-tw': "棲息在火山的周圍。在一天結束時，會泡進 熔岩中讓身體舒緩疲勞。",
		th: "อาศัยอยู่บริเวณภูเขาไฟ เมื่อสิ้นสุดในแต่ละวันจะลงไปแช่ตัวในแม็กมาเพื่อคลายความเหนื่อยล้า"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "じりじりヒーター",
			'zh-tw': "滋滋點火",
			th: "ฮีทเตอร์เผาเนิบ ๆ"
		},

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置6個傷害指示物。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
