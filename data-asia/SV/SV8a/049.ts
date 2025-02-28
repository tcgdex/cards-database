import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモex",
		id: "Walking Wake ex",
		th: "คลื่นน้ำกระเพื่อมex",
		'zh-tw': "波盪水ex",
		'zh-cn': "波盪水ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんぺきはとう",
			id: "Ombak Besar Biru Tua",
			th: "คลื่นยักษ์น้ำเงินคราม",
			'zh-tw': "藏青浪濤",
			'zh-cn': "藏青浪濤"
		},

		effect: {
			ja: "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			id: "Kerusakan akibat serangan yang digunakan oleh Pokémon ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ใช้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'zh-tw': "這隻寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這隻寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "カタルシスロアー",
			id: "Catharsis Roar",
			th: "แผดเสียงระบายอารมณ์",
			'zh-tw': "宣洩吼嘯",
			'zh-cn': "宣洩吼嘯"
		},

		damage: "120+",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			id: "Jika Pokémon Bertarung lawan mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 120.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加120點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢處於特殊狀態，則增加120點傷害。"
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