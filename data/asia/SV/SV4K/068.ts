import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ブビィ",
		'th-th': "บูบี",
		'ko-kr': "마그비"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [240],
	hp: 30,
	types: ["Fire"],

	description: {
		'ja-jp': "火山の まわりに 棲んでいる。 １日の 終わりには マグマに 浸かり 疲れを 癒している。",
		'th-th': "อาศัยอยู่บริเวณภูเขาไฟ เมื่อสิ้นสุดในแต่ละวันจะลงไปแช่ตัวในแม็กมาเพื่อคลายความเหนื่อยล้า",
		'ko-kr': "화산 주위에 살고 있다. 하루를 마칠 때에는 마그마에 잠겨 피로를 푼다."
	},

	stage: "Basic",

	attacks: [{


		name: {
			'ja-jp': "じりじりヒーター",
			'th-th': "ฮีทเตอร์เผาเนิบ ๆ",
			'ko-kr': "지글지글히터"
		},

		effect: {
			'ja-jp': "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 6 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			'ko-kr': "상대의 다음 차례에 이 포켓몬이 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 데미지 카운터를 6개 올린다."
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
				cardmarket: 741468,
				tcgplayer: 565823,
			},
		},
	],

	retreat: 0,
	regulationMark: "G",
}

export default card