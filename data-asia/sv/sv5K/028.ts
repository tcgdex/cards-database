import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
		th: "โดมิเรอร์",
		'zh-cn': "銅鏡怪"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [436],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。",
		'zh-tw': "過去的人們相信，銅鏡怪背上的花紋裡 蘊藏著神秘的力量。",
		th: "ผู้คนในอดีตเชื่อกันว่าลายที่หลังโดมิเรอร์มีพลังลึกลับซ่อนอยู่",
		'zh-cn': "過去的人們相信，銅鏡怪背上的花紋裡 蘊藏著神秘的力量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ミラーアタック",
			'zh-tw': "鏡面攻擊",
			th: "มิเรอร์แอทแทก",
			'zh-cn': "鏡面攻擊"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【超】寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[พลังจิต] การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			'zh-cn': "若對手的戰鬥寶可夢為【超】寶可夢，則增加30點傷害。"
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

	retreat: 3,
	regulationMark: "H"
}

export default card