import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウッウ",
		'zh-tw': "古月鳥",
		th: "อุ๊อุ"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [845],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "物覚えは 悪すぎだが 脳に 使う エネルギーを ぎりぎりにして そのぶんを 戦いに 回すのだ。",
		'zh-tw': "記性差到不行，但其實是只 留了最低限度的能量給大腦， 把大部分能量都用在戰鬥上。",
		th: "มีความจำที่แย่มาก ให้สมองใช้พลังงานน้อยที่สุด แล้วเอาพลังงานที่เหลือไปลงกับการต่อสู้แทน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スピットシュート",
			'zh-tw': "噴吐射擊",
			th: "สปิตชูต"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 120 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card