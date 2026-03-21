import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグex",
		'zh-tw': "毒骷蛙ex",
		th: "โดคูร็อกex",
		id: "Toxicroak ex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "わるだくみ",
			'zh-tw': "詭計",
			th: "ความคิดชั่วร้าย",
			id: "Rencana Jahat"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "どくどくリッパー",
			'zh-tw': "劇毒拆裂",
			th: "ริปเปอร์มหาพิษ",
			id: "Pencabik Beracun"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為6個。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] จำนวนตัวนับแดเมจที่วางด้วยสภาวะ[พิษ]นี้จะเป็น 6 ตัว",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun. Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun ini adalah 6."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693022
	}
}

export default card