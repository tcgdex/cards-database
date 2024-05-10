import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オリーヴァ",
		'zh-tw': "奧利瓦",
		id: "Arboliva"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	dexId: [930],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "穏やかで とても 慈悲深い。 栄養豊富な 美味しい オイルを 弱った ポケモンに 分け与える。",
		'zh-tw': "性情溫和，慈悲為懷。會把營養豐富且美味可口 的油分給虛弱的寶可夢。",
		id: "Sifatnya tenang dan sangat penyayang. Arboliva memberikan minyak bernutrisi nan lezat kepada Pokémon yang melemah."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんたんオイル",
			'zh-tw': "全滿油",
			id: "Minyak Penuh"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將自己的1隻寶可夢的HP全部恢復。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pulihkan HP 1 Pokémon sendiri sepenuhnya."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束",
			id: "Solar Beam"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card