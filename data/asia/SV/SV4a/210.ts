import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒトカゲ",
		'zh-tw': "小火龍",
		'id-id': "Charmander"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。 火焰熄滅時，生命也會結束。",
		'id-id': "Sejak lahir, api menyala di ekor Charmander. Hidupnya akan berakhir saat api tersebut padam."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "まるやけ",
			'zh-tw': "全部燒光",
			'id-id': "Bakar Bulat-bulat"
		},

		effect: {
			'ja-jp': "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			'id-id': "Buang Stadium yang ada di Arena ke Trash."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "ひをはく",
			'zh-tw': "吐火",
			'id-id': "Memuntahkan Api"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747564,
				tcgplayer: 567611,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card