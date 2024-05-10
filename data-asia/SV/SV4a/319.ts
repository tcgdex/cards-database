import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラミンゴ",
		'zh-tw': "纏紅鶴",
		id: "Flamigo"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [973],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "お腹に 溜めた エネルギーが くちばしから 漏れないように 首を 根元で 結んでいるらしい。",
		'zh-tw': "為了避免積蓄在肚子裡的能量外流，似乎會把 自己的脖子繫在頸根部上。",
		id: "Kabarnya Flamigo mengikat lehernya pada pangkal lehernya agar energi yang terkumpul di dalam perut tidak keluar dari paruhnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いっきにむれる",
			'zh-tw': "一氣群聚",
			id: "Menggerombol Serentak"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「カラミンゴ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多3張「纏紅鶴」，在給對手看過後加入手牌。並且重洗牌庫。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih paling banyak 3 lembar Flamigo dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "だんけつのつばさ",
			'zh-tw': "團結之翼",
			id: "Sayap Bersatu Padu"
		},

		damage: "20×",

		effect: {
			ja: "自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。",
			'zh-tw': "造成自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×20點傷害。",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Pokémon yang memiliki serangan Sayap Bersatu Padu yang ada di Trash sendiri."
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