import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウネルミナモex",
		'id-id': "Walking Wake ex",
		'th-th': "คลื่นน้ำกระเพื่อมex",
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
			'ja-jp': "こんぺきはとう",
			'id-id': "Ombak Besar Biru Tua",
			'th-th': "คลื่นยักษ์น้ำเงินคราม",
			'zh-tw': "藏青浪濤",
			'zh-cn': "藏青浪濤"
		},

		effect: {
			'ja-jp': "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'id-id': "Kerusakan akibat serangan yang digunakan oleh Pokémon ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan.",
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ใช้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'zh-tw': "這隻寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這隻寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢身上的附加效果。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "カタルシスロアー",
			'id-id': "Catharsis Roar",
			'th-th': "แผดเสียงระบายอารมณ์",
			'zh-tw': "宣洩吼嘯",
			'zh-cn': "宣洩吼嘯"
		},

		damage: "120+",

		effect: {
			'ja-jp': "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			'id-id': "Jika Pokémon Bertarung lawan mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 120.",
			'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'zh-tw': "若對手的戰鬥寶可夢處於特殊狀態，則增加120點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢處於特殊狀態，則增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803162,
				tcgplayer: 602403,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card