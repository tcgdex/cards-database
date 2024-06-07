import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ",
		'zh-tw': "米立龍",
		id: "Tatsugiri"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [978],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "小型の ドラゴンポケモン。 ヘイラッシャの 口の中に 棲み 外敵から 身を 守っている。",
		'zh-tw': "小型的龍寶可夢。會住在吃吼霸嘴裡， 保護自己免於外敵襲擊。",
		id: "Pokémon naga kecil. Tatsugiri tinggal di dalam mulut Dondozo agar terlindung dari serangan luar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "したじゅんび",
			'zh-tw': "預先準備",
			id: "Persiapan Awal"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、自分のたねポケモン1匹につける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【水】能量」卡，附於自己的1隻【基礎】寶可夢身上。並且重洗牌庫。",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada 1 Pokémon Basic sendiri. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "そりかえる",
			'zh-tw': "彎曲",
			id: "Menekuk Balik"
		},

		damage: 30,

		effect: {
			ja: "このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。",
			id: "Kembalikan Pokémon ini dan semua kartu yang dikenakannya ke Kartu Pegangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card