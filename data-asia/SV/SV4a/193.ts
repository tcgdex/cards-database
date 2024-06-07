import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラフレシア",
		'zh-tw': "霸王花",
		id: "Vileplume"
	},

	illustrator: "0313",
	category: "Pokemon",
	dexId: [45],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "花びらが 大きいほど たくさん 花粉を 出すが 頭が 重たくて 疲れてしまうという。",
		'zh-tw': "雖然花瓣越大就能放出越多的花粉，但頭部也會 隨之變重而容易疲倦。",
		id: "Makin besar kelopak bunga Vileplume, makin banyak pula serbuk sari yang dapat dikeluarkan olehnya. Akan tetapi, dikatakan bahwa kepalanya yang berat membuat Pokémon ini kelelahan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんかいエナジー",
			'zh-tw': "全開能量",
			id: "Energi Mekar Penuh"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から8枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。查看自己的牌庫上方8張卡，從其中選擇任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat 8 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan sesukanya pada Pokémon sendiri. Kocok kembali sisa kartu ke Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束",
			id: "Solar Beam"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card