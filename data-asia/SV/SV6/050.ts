import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴",
		th: "ชิรีน"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Mousho",
	dexId: [358],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "鳴き声は 体の 空洞で 響き合って きれいな 音色になり 敵を驚かせ 追いはらう。",
		'zh-tw': "叫聲會在身體的空洞裡 迴盪出美麗的音色， 趕走被嚇到的敵人。",
		th: "เสียงร้องก้องกังวานภายในร่างที่กลวงเกิดเป็นเสียงที่ไพเราะ ทำให้ศัตรูตกใจและไล่มันออกไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ハイパーボイス",
			'zh-tw': "巨聲",
			th: "ไฮเปอร์วอยซ์"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おかえりチャイム",
			'zh-tw': "回家鐘聲",
			th: "เสียงกระดิ่งต้อนรับกลับ"
		},

		effect: {
			ja: "自分のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。",
			'zh-tw': "選擇1隻自己的備戰寶可夢，將那隻寶可夢與附加的卡全部放回牌庫並重洗。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดแล้วสับ"
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
	regulationMark: "H"
}

export default card