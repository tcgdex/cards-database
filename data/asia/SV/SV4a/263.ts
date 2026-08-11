import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミカルゲ",
		'zh-tw': "花岩怪",
		'id-id': "Spiritomb"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	dexId: [442],
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
		'zh-tw': "總是作惡多端，不料有一天本體被 神奇法術綁縛到了楔石上。",
		'id-id': "Karena selalu melakukan kejahatan, tubuh asli Spiritomb diikat ke Batu Kunci menggunakan teknik misterius."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "しっこくのわざわい",
			'zh-tw': "漆黑降災",
			'id-id': "Malapetaka Hitam Kelam"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、おたがいの場のたねポケモンの「ポケモンV」の特性は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在場上，雙方場上【基礎】寶可夢的「寶可夢【V】」的特性全部消除。",
			'id-id': "Selama Pokémon ini ada di Arena, Pokémon {V} yang merupakan Pokémon Basic di Arena kedua pemain menjadi tidak memiliki Ability."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ぱっときえる",
			'zh-tw': "憑空消失",
			'id-id': "Menghilang Mendadak"
		},

		damage: 10,

		effect: {
			'ja-jp': "このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。",
			'id-id': "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747617,
				tcgplayer: 567664,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card