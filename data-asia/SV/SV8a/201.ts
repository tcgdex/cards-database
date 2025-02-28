import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン みどりのめんex",
		id: "Ogerpon Topeng Teal ex",
		'zh-tw': "厄鬼椪 碧草面具ex",
		'zh-cn': "厄鬼椪 碧草面具ex"
	},

	illustrator: "Yukihiro Tada",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みどりのまい",
			id: "Tarian Teal",
			'zh-tw': "碧綠之舞",
			'zh-cn': "碧綠之舞"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、このポケモンにつける。その後、自分の山札を1枚引く。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini. Setelah itu, ambil 1 kartu dari atas Deck sendiri.",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "まんようしぐれ",
			id: "Hujan Ribuan Daun",
			'zh-tw': "萬葉陣雨",
			'zh-cn': "萬葉陣雨"
		},

		damage: "30+",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung kedua pemain.",
			'zh-tw': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			'zh-cn': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card