import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ニャローテ",
		'zh-tw': "蒂蕾喵",
		'th-th': "เนียโรเต",
		'id-id': "Floragato"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
		'zh-tw': "會靈巧操控長長的體毛下隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。",
		'th-th': "ใช้เถาวัลย์ที่ซ่อนอยู่ภายใต้ขนตามร่างกายที่มีขนาดยาวได้อย่างคล่องแคล่ว และใช้ดอกตูมแข็ง ๆ ฟาดฟันศัตรู",
		'id-id': "Floragato mengendalikan sulur ranting yang tersembunyi di bawah bulu panjangnya dengan mahir, lalu membanting kuncup keras ke lawan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "タネばくだん",
			'zh-tw': "種子炸彈",
			'th-th': "ระเบิดเมล็ดพืช",
			'id-id': "Bom Benih"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "マジックウィップ",
			'zh-tw': "魔法鞭打",
			'th-th': "เมจิกวิป",
			'id-id': "Magic Whip"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'th-th': "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			'id-id': "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701043,
				tcgplayer: 568129,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card