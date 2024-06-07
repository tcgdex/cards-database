import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "リククラゲ",
		th: "ริคุคุราเกะ"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	dexId: [949],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "１０本の 触手で 絡みつき 養分を 吸い取って 苦しめる。 裾の ヒダは 珍味で 人気。",
		th: "ใช้หนวดสิบเส้นพันรอบตัวอีกฝ่ายแล้วดูดสารอาหาร ทำให้อีกฝ่ายทรมาน ส่วนขอบที่โค้งไปมานั้นถือเป็นอาหารเลิศรสและเป็นที่นิยมมาก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ねんきんコロニー",
			th: "กลุ่มราเมือก"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のトラッシュにあるカードは、相手の特性またはトレーナーズの効果で、手札に加えられない。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ การ์ดที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม จะนำขึ้นมือ ด้วยเอฟเฟกต์ของความสามารถหรือการ์ดเทรนเนอร์ของฝ่ายตรงข้ามไม่ได้"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "きのこドレイン",
			th: "มัชรูมเดรน"
		},

		damage: 80,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
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