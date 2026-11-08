import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "カビゴン",
		'zh-tw': "卡比獸",
		'id-id': "Snorlax"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。",
		'zh-tw': "擁有一個結實的胃，即使吃了發霉腐爛的東西， 也完全不會吃壞肚子。",
		'id-id': "Karena perutnya kuat, Snorlax tidak akan sakit perut walau memakan makanan berjamur atau makanan busuk sekalipun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "くいいじ",
			'zh-tw': "貪嘴",
			'id-id': "Kemaruk"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分のトラッシュから「たべのこし」を2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇最多2張「吃剩的東西」，在給對手看過後加入手牌。",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih paling banyak 2 lembar Sisa Makanan dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "バッタンプレス",
			'zh-tw': "養肥壓制",
			'id-id': "Tekanan Gedebuk"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747664,
				tcgplayer: 567711,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card