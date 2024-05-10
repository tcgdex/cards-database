import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルー",
		'zh-tw': "古鼎鹿",
		th: "ติ่งลู่"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1003],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "とても 重たい 頭を ゆっくり 振り下ろし 深さ５０メートルの 長大な 地割れを 引き起こす。",
		'zh-tw': "當牠緩緩揮下自己笨重的 頭部時，會造成地面出現 深度達５０公尺的巨大裂縫。",
		th: "ค่อย ๆ เหวี่ยงหัวที่หนักอึ้งลง สร้างรอยร้าวบนผืนดินลึก 50 เมตร"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "グラウンドクラック",
			'zh-tw': "大地斷裂",
			th: "กราวนด์แคร็ก"
		},

		damage: 30,

		effect: {
			ja: "場にスタジアムが出ているなら、相手のベンチポケモン全員にも、それぞれ30ダメージを与え、そのスタジアムをトラッシュする。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "若場上有競技場卡，則對手的所有備戰寶可夢也各受到30點傷害，並將那張競技場卡丟棄。[在備戰區不計算弱點・抵抗力。]",
			th: "ถ้ามีการ์ดสเตเดียมอยู่บนกระดาน โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย ทิ้งการ์ดสเตเดียมนั้นที่ตำแหน่งทิ้งการ์ด {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card