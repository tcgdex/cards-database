import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ブビィ",
		th: "บูบี",
		ko: "마그비"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		ja: "火山の まわりに 棲んでいる。 １日の 終わりには マグマに 浸かり 疲れを 癒している。",
		th: "อาศัยอยู่บริเวณภูเขาไฟ เมื่อสิ้นสุดในแต่ละวันจะลงไปแช่ตัวในแม็กมาเพื่อคลายความเหนื่อยล้า",
		ko: "화산 주위에 살고 있다. 하루를 마칠 때에는 마그마에 잠겨 피로를 푼다."
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "じりじりヒーター",
			th: "ฮีทเตอร์เผาเนิบ ๆ",
			ko: "지글지글히터"
		},

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			ko: "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 6개 올린다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741234
	}
}

export default card