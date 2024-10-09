import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロゾ",
		'zh-tw': "蚊香君",
		th: "เนียวโรโซ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "OKACHEKE",
	dexId: [61],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "全身の 皮膚は 湿っているが お腹の 渦巻きの 部分の 感触は すべすべとしている。",
		'zh-tw': "全身的皮膚都濕答答的， 但肚子上的漩渦部分 摸起來很光滑。",
		th: "ผิวทั่วร่างชุ่มชื้น แต่ส่วนที่ขดเป็นวงตรงท้องนั้นมีผิวสัมผัสที่นุ่มลื่น"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さいみんじゅつ",
			'zh-tw': "催眠術",
			th: "สะกดจิต"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おうふくビンタ",
			'zh-tw': "連環巴掌",
			th: "ตบเรียกสติ"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card