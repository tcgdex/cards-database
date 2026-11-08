import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤドキングex",
		'zh-tw': "呆呆王ex",
		'th-th': "ยาโดคิงex",
		'id-id': "Slowking ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "うんちく",
			'zh-tw': "博學",
			'th-th': "ความรู้สั่งสม",
			'id-id': "Pengetahuan Mendalam"
		},

		damage: 30,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "ウィズダムヘッド",
			'zh-tw': "才智頭擊",
			'th-th': "วิสดอมเฮด",
			'id-id': "Wisdom Headbutt"
		},

		damage: 130,

		effect: {
			'ja-jp': "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "若希望，從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			'th-th': "หากต้องการ เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			'id-id': "Pemain dapat memilih paling banyak 2 kartu sesukanya dari Deck sendiri, lalu menambahkannya ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 705263,
				tcgplayer: 567787,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card