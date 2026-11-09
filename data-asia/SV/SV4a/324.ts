import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラウドボーンex",
		'zh-tw': "骨紋巨聲鱷ex",
		id: "Skeledirge ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	dexId: [911],
	hp: 340,
	types: ["Fire"],

	evolveFrom: {
		ja: "アチゲータ"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "かつりょくのうた",
			'zh-tw': "活力之歌",
			id: "Lagu Vitalitas"
		},

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		},

		damage: 50,
		cost: ["Fire"]
	}, {
		name: {
			ja: "バーニングボイス",
			'zh-tw': "燃燒之聲",
			id: "Burning Voice"
		},

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			id: "Kerusakan akibat serangan ini berkurang sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "270-",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747678,
				tcgplayer: 567724,
				cardtrader: 270326,
			},
		},
	]
}

export default card