import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "セグレイブ",
		'zh-tw': "戟脊龍",
		id: "Baxcalibur"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [998],
	hp: 160,
	types: ["Water"],

	description: {
		ja: "極低温の 冷気を 口から 噴射。 灼熱の マグマでも 瞬時に 凍りつかせてしまう。",
		'zh-tw': "會從嘴裡噴射極低溫的冷氣。即使是灼熱的熔岩也能 使其在一瞬間變成冰塊。",
		id: "Baxcalibur menyemburkan hawa dingin yang bersuhu sangat rendah dari mulutnya. Magma panas membara pun akan membeku dalam sekejap."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きょくていおん",
			'zh-tw': "極低溫",
			id: "Suhu Rendah Ekstrem"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張「基本【水】能量」卡，附於自己的寶可夢身上。",
			id: "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Air} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "バスターテール",
			'zh-tw': "光炮尾",
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