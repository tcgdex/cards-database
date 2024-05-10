import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ブビィ",
		th: "บูบี"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		ja: "火山の まわりに 棲んでいる。 １日の 終わりには マグマに 浸かり 疲れを 癒している。",
		th: "อาศัยอยู่บริเวณภูเขาไฟ เมื่อสิ้นสุดในแต่ละวันจะลงไปแช่ตัวในแม็กมาเพื่อคลายความเหนื่อยล้า"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "じりじりヒーター",
			th: "ฮีทเตอร์เผาเนิบ ๆ"
		},

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
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