import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "タギングル",
		'zh-tw': "塗標客",
		id: "Grafaiai"
	},

	illustrator: "Scav",
	category: "Pokemon",
	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "エサによって 色が 変化する 毒の 唾液を 指に 塗して 森の 木々に 模様を 描く。",
		'zh-tw': "會將能隨著吃下的食物而變色的毒唾液塗在指頭上， 在森林的樹木描繪上圖案。",
		id: "Grafaiai melumuri jarinya dengan air liur beracun yang warnanya berubah tergantung dari makanannya dan melukis pola pada pohon-pohon yang ada di hutan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液",
			id: "Cairan Racun"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "カラフルグラフィティ",
			'zh-tw': "鮮豔塗鴉",
			id: "Colorful Graffiti"
		},

		damage: "40×",

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、トラッシュした基本エネルギーのタイプの数×40ダメージ。",
			'zh-tw': "從自己的手牌將任意數量的基本能量卡丟棄，造成丟棄的基本能量卡的屬性種類的數量×40點傷害。",
			id: "Buang sesukanya Energi Dasar dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 40 untuk tiap tipe Energi Dasar yang dibuang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card