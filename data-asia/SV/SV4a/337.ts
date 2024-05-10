import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イキリンコex",
		'zh-tw': "怒鸚哥ex",
		id: "Squawkabilly ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "イキリテイク",
			'zh-tw': "裝酷重抽",
			id: "Ambil Ulang Penuh Lagak"
		},

		effect: {
			ja: "最初の自分の番にだけ1回使える。自分の手札をすべてトラッシュし、山札を6枚引く。この番、すでに別の「イキリテイク」を使っていたなら、この特性は使えない。",
			'zh-tw': "只有在自己的最初回合可使用1次。將自己的手牌全部丟棄，從牌庫抽出6張卡。在這個回合，若已經使出了其他的「裝酷重抽」，則這個特性無法使用。",
			id: "Hanya dapat digunakan 1 kali pada giliran pertama sendiri. Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 6 kartu dari atas Deck. Jika pada giliran ini, Ambil Ulang Penuh Lagak lainnya telah digunakan, Ability ini tidak dapat digunakan."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きあいをいれる",
			'zh-tw': "幹勁十足",
			id: "Membulatkan Tekad"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，附於1隻備戰寶可夢身上。",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada 1 Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card