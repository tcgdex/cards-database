import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ラウドボーンex",
		'zh-tw': "骨紋巨聲鱷ex",
		'id-id': "Skeledirge ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "かつりょくのうた",
			'zh-tw': "活力之歌",
			'id-id': "Lagu Vitalitas"
		},

		damage: 50,

		effect: {
			'ja-jp': "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			'id-id': "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'ja-jp': "バーニングボイス",
			'zh-tw': "燃燒之聲",
			'id-id': "Burning Voice"
		},

		damage: "270-",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'id-id': "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747678,
				tcgplayer: 567724,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card