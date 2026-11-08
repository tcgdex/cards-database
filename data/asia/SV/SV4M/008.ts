import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リククラゲ",
		'zh-tw': "陸地水母",
		'th-th': "ริคุคุราเกะ",
		'ko-kr': "육파리"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [949],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "１０本の 触手で 絡みつき 養分を 吸い取って 苦しめる。 裾の ヒダは 珍味で 人気。",
		'zh-tw': "會用自己的１０根觸手纏住敵人，並吸取養分來折磨對方。下擺的摺皺是很受歡迎的珍味佳餚。",
		'th-th': "ใช้หนวดสิบเส้นพันรอบตัวอีกฝ่ายแล้วดูดสารอาหาร ทำให้อีกฝ่ายทรมาน ส่วนขอบที่โค้งไปมานั้นถือเป็นอาหารเลิศรสและเป็นที่นิยมมาก",
		'ko-kr': "10개의 촉수로 휘감은 다음 양분을 흡수해서 괴롭힌다. 갓의 주름은 별미로 인기가 높다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ねんきんコロニー",
			'zh-tw': "黏菌集群",
			'th-th': "กลุ่มราเมือก",
			'ko-kr': "점균 콜로니"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手のトラッシュにあるカードは、相手の特性またはトレーナーズの効果で、手札に加えられない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的棄牌區的卡，無法因對手的特性或者訓練家卡的效果而加入手牌。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำขึ้นมือ ด้วยเอฟเฟกต์ของความสามารถหรือการ์ดเทรนเนอร์ของฝ่ายตรงข้ามไม่ได้",
			'ko-kr': "이 포켓몬이 있는 한, 상대의 트래쉬에 있는 카드는 상대의 특성 또는 트레이너스의 효과로 패로 가져올 수 없다."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "きのこドレイン",
			'zh-tw': "蘑菇吸取",
			'th-th': "มัชรูมเดรน",
			'ko-kr': "버섯드레인"
		},

		damage: 80,

		effect: {
			'ja-jp': "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
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
			type: "normal",
			thirdParty: {
				cardmarket: 741830,
				tcgplayer: 565968,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card