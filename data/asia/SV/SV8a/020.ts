import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オーガポン みどりのめんex",
		'id-id': "Ogerpon Topeng Teal ex",
		'th-th': "โอการ์ปอง หน้ากากสีทีลex",
		'zh-tw': "厄鬼椪 碧草面具ex",
		'zh-cn': "厄鬼椪 碧草面具ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "みどりのまい",
			'id-id': "Tarian Teal",
			'th-th': "ระบำเขียวขจี",
			'zh-tw': "碧綠之舞",
			'zh-cn': "碧綠之舞"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、このポケモンにつける。その後、自分の山札を1枚引く。",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini. Setelah itu, ambil 1 kartu dari atas Deck sendiri.",
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนนี้ หลังจากนั้น จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'ja-jp': "まんようしぐれ",
			'id-id': "Hujan Ribuan Daun",
			'th-th': "ฝนใบไม้โปรยปราย",
			'zh-tw': "萬葉陣雨",
			'zh-cn': "萬葉陣雨"
		},

		damage: "30+",

		effect: {
			'ja-jp': "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung kedua pemain.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย x30",
			'zh-tw': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			'zh-cn': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803133,
				tcgplayer: 602353,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card