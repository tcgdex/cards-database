import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "キリンリキ",
		'zh-tw': "麒麟奇",
		th: "คิรินริกิ"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "尻尾にも 小さな 頭がある。 背後から 近づく 敵がいると 本能的に 噛みついてくる。",
		'zh-tw': "尾巴上也有小小顆的頭。 如果有敵人從背後靠近， 就會受本能驅使一咬而上。",
		th: "ที่หางก็มีหัวเล็ก ๆ อยู่ ถ้ามีศัตรูเข้ามาใกล้จากข้างหลัง ก็จะกัดตามสัญชาตญาณ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どっちもヘッド",
			'zh-tw': "雙向頭擊",
			th: "หัวทั้งคู่"
		},

		damage: 30,

		effect: {
			ja: "自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的1隻備戰寶可夢也受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ก็จะได้รับแดเมจ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761494
	}
}

export default card