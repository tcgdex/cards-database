import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ニャローテ",
		'zh-tw': "蒂蕾喵",
		'id-id': "Floragato"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
		'zh-tw': "會靈巧操控長長的體毛下隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。",
		'id-id': "Floragato mengendalikan sulur ranting yang tersembunyi di bawah bulu panjangnya dengan mahir, lalu membanting kuncup keras ke lawan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "タネばくだん",
			'zh-tw': "種子炸彈",
			'id-id': "Bom Benih"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "マジックウィップ",
			'zh-tw': "魔法鞭打",
			'id-id': "Magic Whip"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			'id-id': "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747556,
				tcgplayer: 567603,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card