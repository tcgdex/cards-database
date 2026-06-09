import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
		th: "โดมิเรอร์",
		ko: "동미러"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [436],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。",
		'zh-tw': "過去的人們相信，銅鏡怪背上的花紋裡 蘊藏著神秘的力量。",
		th: "ผู้คนในอดีตเชื่อกันว่าลายที่หลังโดมิเรอร์มีพลังลึกลับซ่อนอยู่",
		ko: "옛날 사람들은 동미러의 등 무늬에 신비한 힘이 깃들어 있다고 믿었다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ミラーアタック",
			'zh-tw': "鏡面攻擊",
			th: "มิเรอร์แอทแทก",
			ko: "미러어택"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【超】寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[พลังจิต] การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			ko: "상대의 배틀 포켓몬이 (초) 포켓몬이라면 30데미지를 추가한다."
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
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752793
	}
}

export default card