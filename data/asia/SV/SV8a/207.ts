import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イルカマンex",
		'id-id': "Palafin ex",
		'zh-tw': "海豚俠ex",
		'zh-cn': "海豚俠ex"
	},

	illustrator: "Tetsuo Hara",
	rarity: "None",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "マイティソウル",
			'id-id': "Jiwa Perkasa",
			'zh-tw': "全能靈魂",
			'zh-cn': "全能靈魂"
		},

		effect: {
			'ja-jp': "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。",
			'id-id': "Kartu ini hanya dapat dimasukkan ke Arena menggunakan efek dari Ability Menjadi Perkasa Palafin.",
			'zh-tw': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。",
			'zh-cn': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "ギガインパクト",
			'id-id': "Giga Impact",
			'zh-tw': "終極衝擊",
			'zh-cn': "終極衝擊"
		},

		damage: 250,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803320,
				tcgplayer: 602671,
			},
		},
	],

	retreat: 2,
	regulationMark: "H"
}

export default card