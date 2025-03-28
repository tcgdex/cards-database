import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "モモワロウex",
		id: "Pecharunt ex",
		'zh-tw': "桃歹郎ex",
		'zh-cn': "桃歹郎ex"
	},

	illustrator: "osare",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しはいのくさり",
			id: "Rantai Dominasi",
			'zh-tw': "支配鎖鏈",
			'zh-cn': "支配鎖鏈"
		},

		effect: {
			ja: "自分の番に1回使える。自分のベンチのポケモン（「モモワロウex」をのぞく）を1匹選び、バトルポケモンと入れ替える。その後、新しいバトルポケモンをどくにする。この番、すでに別の「しはいのくさり」を使っていたなら、この特性は使えない。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 Pokémon {Kegelapan} (selain Pecharunt {ex}) di Cadangan sendiri, lalu tukar dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Racun. Jika pada giliran ini, Rantai Dominasi lainnya telah digunakan, Ability ini tidak dapat digunakan.",
			'zh-tw': "在自己的回合時可使用1次。選擇1隻自己的備戰區的【惡】寶可夢（「桃歹郎【ex】」除外），與戰鬥寶可夢互換。然後，將新的戰鬥寶可夢【中毒】。在這個回合，若已經使出了其他的「支配鎖鏈」，則這個特性無法使用。",
			'zh-cn': "在自己的回合時可使用1次。選擇1隻自己的備戰區的【惡】寶可夢（「桃歹郎【ex】」除外），與戰鬥寶可夢互換。然後，將新的戰鬥寶可夢【中毒】。在這個回合，若已經使出了其他的「支配鎖鏈」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "イライラバースト",
			id: "Ledakan Marah-marah",
			'zh-tw': "煩煩爆炸",
			'zh-cn': "煩煩爆炸"
		},

		damage: "60×",

		effect: {
			ja: "相手がすでにとったサイドの枚数×60ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembar Kartu Point yang telah diambil lawan.",
			'zh-tw': "造成對手已經獲得的獎賞卡的張數×60點傷害。",
			'zh-cn': "造成對手已經獲得的獎賞卡的張數×60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card