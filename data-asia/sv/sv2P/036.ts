import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ポットデス",
		'zh-tw': "怖思壺",
		th: "พอตเดธ",
		id: "Polteageist"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [855],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "紅茶で できた 体は クセは あるものの 美味しいが 飲みすぎると 死んでしまうことも。",
		'zh-tw': "以紅茶構成的身體風味獨特卻不失美味， 但飲用過量可能致死。",
		th: "ร่างกายที่เป็นชานั้นมีความเป็นเอกลักษณ์และรสชาติดี แต่หากดื่มมากไปอาจตายได้",
		id: "Tubuh Polteageist yang terbuat dari teh yang enak namun memiliki rasa yang kuat, terkadang mematikan jika diminum terlalu banyak."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "こっとうあつめ",
			'zh-tw': "集古董",
			th: "สะสมของโบราณ",
			id: "Mengumpulkan Barang Antik"
		},

		effect: {
			ja: "自分のトラッシュから「グッズ」と「ポケモンのどうぐ」を合計2枚まで選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇「物品」卡與「寶可夢道具」卡合計最多2張，在給對手看過後加入手牌。",
			th: "เลือกการ์ด [ไอเท็ม] และ การ์ด [ไอเท็มติดโปเกมอน] รวมกันได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ",
			id: "Pilih paling banyak total 2 lembar Item dan Pokémon Tool dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "おちゃをそそぐ",
			'zh-tw': "倒茶",
			th: "รินชา",
			id: "Menuangkan Teh"
		},

		effect: {
			ja: "相手のバトルポケモンに、ダメカンを5個のせる。",
			'zh-tw': "在對手的戰鬥寶可夢身上放置5個傷害指示物。",
			th: "วางตัวนับแดเมจ 5 ตัว บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			id: "Letakkan 5 Token Kerusakan pada Pokémon Bertarung lawan."
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

	retreat: 2,
	regulationMark: "G"
}

export default card