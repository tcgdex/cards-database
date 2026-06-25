import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモex",
		'zh-tw': "波盪水ex",
		th: "คลื่นน้ำกระเพื่อมex",
		ko: "굽이치는물결 ex"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんぺきはとう",
			'zh-tw': "藏青浪濤",
			th: "คลื่นยักษ์น้ำเงินคราม",
			ko: "감벽 파도"
		},

		effect: {
			ja: "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這隻寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ใช้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			ko: "이 포켓몬이 사용하는 기술의 데미지는 상대의 배틀 포켓몬에게 걸려 있는 효과를 계산하지 않는다."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "カタルシスロアー",
			'zh-tw': "宣洩吼嘯",
			th: "แผดเสียงระบายอารมณ์",
			ko: "카타르시스 로어"
		},

		damage: "120+",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			ko: "상대의 배틀 포켓몬이 특수 상태라면 120데미지를 추가한다."
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