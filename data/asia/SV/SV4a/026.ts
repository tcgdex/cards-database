import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リザード",
		'zh-tw': "火恐龍",
		'th-th': "ลิซาร์โดะ",
		'id-id': "Charmeleon"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	dexId: [5],
	hp: 90,
	types: ["Fire"],

	description: {
		'ja-jp': "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。",
		'zh-tw': "如果牠在戰鬥中亢奮起來，就會噴出灼熱的火焰， 把周圍的東西燒得一乾二淨。",
		'th-th': "เมื่อตื่นเต้นจากการต่อสู้จะพ่นเปลวเพลิงร้อนแรงแผดเผารอบข้าง",
		'id-id': "Ketika pertarungan membuat semangat Charmeleon bergejolak, Pokémon ini meniupkan api berpijar dan membakar daerah sekelilingnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "フレアヴェール",
			'zh-tw': "閃焰之幕",
			'th-th': "ม่านเพลิง",
			'id-id': "Tudung Berkobar"
		},

		effect: {
			'ja-jp': "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
			'th-th': "โปเกมอนนี้ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้",
			'id-id': "Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "かえん",
			'zh-tw': "烈焰",
			'th-th': "เผาไหม้",
			'id-id': "Lidah Api"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746228,
				tcgplayer: 567382,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577309,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card