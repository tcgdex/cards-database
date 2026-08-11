import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マルマイン",
		'zh-tw': "頑皮雷彈",
		'id-id': "Electrode"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [101],
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快， 但同時也會變得更容易爆炸。",
		'id-id': "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "ボムボムチェイン",
			'zh-tw': "轟轟連鎖",
			'id-id': "Bomb Bomb Chain"
		},

		damage: "20+",

		effect: {
			'ja-jp': "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
			'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」卡丟棄，增加其張數×40點傷害。",
			'id-id': "Sebelum memberikan kerusakan, buang sesukanya Pokémon Tool yang dikenakan pada Pokémon di Arena sendiri ke Trash, kerusakan yang diberikan bertambah sejumlah 40 untuk tiap lembarnya."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "エレキボール",
			'zh-tw': "電球",
			'id-id': "Electro Ball"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747593,
				tcgplayer: 567640,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card