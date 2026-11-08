import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミニーブ",
		'zh-tw': "迷你芙",
		'id-id': "Smoliv"
	},

	illustrator: "otumami",
	category: "Pokemon",
	dexId: [928],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "頭の 実から オイルを 出して 敵から 身を 守る。 オイルは とびあがるほど 苦くて 渋い。",
		'zh-tw': "會從頭上的果實噴出油來保護自己不受敵人攻擊。 油的味道苦澀到會讓人跳起來。",
		'id-id': "Smoliv melindungi diri dari musuh dengan mengeluarkan minyak dari buah di kepalanya. Minyaknya pahit dan sepat cukup untuk membuat tersentak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "えいようそ",
			'zh-tw': "營養素",
			'id-id': "Nutrisi"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
			'id-id': "Pulihkan HP 1 Pokémon sendiri sejumlah 30."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "しるをとばす",
			'zh-tw': "噴汁",
			'id-id': "Menyemprotkan Getah"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747557,
				tcgplayer: 567604,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card