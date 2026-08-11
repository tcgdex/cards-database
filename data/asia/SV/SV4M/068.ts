import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リククラゲ",
		'th-th': "ริคุคุราเกะ",
		'ko-kr': "육파리"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	dexId: [949],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "１０本の 触手で 絡みつき 養分を 吸い取って 苦しめる。 裾の ヒダは 珍味で 人気。",
		'th-th': "ใช้หนวดสิบเส้นพันรอบตัวอีกฝ่ายแล้วดูดสารอาหาร ทำให้อีกฝ่ายทรมาน ส่วนขอบที่โค้งไปมานั้นถือเป็นอาหารเลิศรสและเป็นที่นิยมมาก",
		'ko-kr': "10개의 촉수로 휘감은 다음 양분을 흡수해서 괴롭힌다. 갓의 주름은 별미로 인기가 높다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ねんきんコロニー",
			'th-th': "กลุ่มราเมือก",
			'ko-kr': "점균 콜로니"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手のトラッシュにあるカードは、相手の特性またはトレーナーズの効果で、手札に加えられない。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำขึ้นมือ ด้วยเอฟเฟกต์ของความสามารถหรือการ์ดเทรนเนอร์ของฝ่ายตรงข้ามไม่ได้",
			'ko-kr': "이 포켓몬이 있는 한, 상대의 트래쉬에 있는 카드는 상대의 특성 또는 트레이너스의 효과로 패로 가져올 수 없다."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "きのこドレイン",
			'th-th': "มัชรูมเดรน",
			'ko-kr': "버섯드레인"
		},

		damage: 80,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			'ko-kr': "이 포켓몬의 HP를 「30」회복한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741895,
				tcgplayer: 566028,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card