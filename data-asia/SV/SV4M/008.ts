import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "リククラゲ",
		'zh-tw': "陸地水母",
		th: "ริคุคุราเกะ"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [949],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "１０本の 触手で 絡みつき 養分を 吸い取って 苦しめる。 裾の ヒダは 珍味で 人気。",
		'zh-tw': "會用自己的１０根觸手纏住敵人，並吸取養分來折磨對方。下擺的摺皺是很受歡迎的珍味佳餚。",
		th: "ใช้หนวดสิบเส้นพันรอบตัวอีกฝ่ายแล้วดูดสารอาหาร ทำให้อีกฝ่ายทรมาน ส่วนขอบที่โค้งไปมานั้นถือเป็นอาหารเลิศรสและเป็นที่นิยมมาก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ねんきんコロニー",
			'zh-tw': "黏菌集群",
			th: "กลุ่มราเมือก"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるカードは、相手の特性またはトレーナーズの効果で、手札に加えられない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的棄牌區的卡，無法因對手的特性或者訓練家卡的效果而加入手牌。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำขึ้นมือ ด้วยเอฟเฟกต์ของความสามารถหรือการ์ดเทรนเนอร์ของฝ่ายตรงข้ามไม่ได้"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "きのこドレイン",
			'zh-tw': "蘑菇吸取",
			th: "มัชรูมเดรน"
		},

		damage: 80,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card