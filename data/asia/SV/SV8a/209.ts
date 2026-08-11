import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サンダースex",
		'id-id': "Jolteon ex",
		'zh-tw': "雷伊布ex",
		'zh-cn': "雷伊布ex"
	},

	illustrator: "kantaro",
	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "フラッシュスピア",
			'id-id': "Flash Spear",
			'zh-tw': "閃光尖矛",
			'zh-cn': "閃光尖矛"
		},

		damage: "60+",

		effect: {
			'ja-jp': "のぞむなら、自分のベンチポケモンについている基本エネルギーを2枚までトラッシュし、その枚数×90ダメージ追加。",
			'id-id': "Pemain dapat membuang paling banyak 2 lembar Energi Dasar yang dikenakan pada Pokémon Cadangan sendiri ke Trash, kerusakan yang diberikan bertambah sejumlah 90 untuk tiap lembarnya.",
			'zh-tw': "若希望，將最多2張自己的備戰寶可夢身上附加的基本能量卡丟棄，增加其張數×90點傷害。",
			'zh-cn': "若希望，將最多2張自己的備戰寶可夢身上附加的基本能量卡丟棄，增加其張數×90點傷害。"
		}
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			'ja-jp': "ドラバイト",
			'id-id': "Dravite",
			'zh-tw': "棕碧璽",
			'zh-cn': "棕碧璽"
		},

		damage: 280,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803322,
				tcgplayer: 602673,
			},
		},
	],

	retreat: 0,
	regulationMark: "H"
}

export default card