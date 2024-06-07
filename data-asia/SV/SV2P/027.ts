import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "セグレイブ",
		'zh-tw': "戟脊龍",
		th: "เซเกลฟ",
		id: "Baxcalibur"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [998],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "極低温の 冷気を 口から 噴射。 灼熱の マグマでも 瞬時に 凍りつかせてしまう。",
		'zh-tw': "會從嘴裡噴射極低溫的冷氣。即使是灼熱的熔岩也能 使其在一瞬間變成冰塊。",
		th: "พ่นไอเย็นที่อุณหภูมิต่ำมากออกมาจากปาก แม้แต่แม็กมาที่ร้อนระอุก็สามารถแช่แข็งได้ในชั่วพริบตา",
		id: "Baxcalibur menyemburkan hawa dingin yang bersuhu sangat rendah dari mulutnya. Magma panas membara pun akan membeku dalam sekejap."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょくていおん",
			'zh-tw': "極低溫",
			th: "อุณหภูมิต่ำสุดขั้ว",
			id: "Suhu Rendah Ekstrem"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張「基本【水】能量」卡，附於自己的寶可夢身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา",
			id: "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Air} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "バスターテール",
			'zh-tw': "光炮尾",
			th: "บัสเตอร์เทล",
			id: "Buster Tail"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card