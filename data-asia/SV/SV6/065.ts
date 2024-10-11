import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いしずえのめんex",
		'zh-tw': "厄鬼椪 礎石面具ex",
		th: "โอการ์ปอง หน้ากากฐานรากex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いしずえのかまえ",
			'zh-tw': "礎石之勢",
			th: "การเตรียมพร้อมของฐานราก"
		},

		effect: {
			ja: "このポケモンは、相手の特性を持つポケモンからワザのダメージを受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的擁有特性的寶可夢招式的傷害。",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามที่มีความสามารถ"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ぶちやぶる",
			'zh-tw': "打爆",
			th: "ตีแตกพ่าย"
		},

		damage: 140,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card