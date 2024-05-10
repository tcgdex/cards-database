import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カメックスex",
		'zh-tw': "水箭龜ex",
		th: "คาเม็กซ์ex",
		id: "Blastoise ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいこうら",
			'zh-tw': "堅硬甲殼",
			th: "กระดองสุดแข็ง",
			id: "Tempurung Padat"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "ツインカノン",
			'zh-tw': "雙加農炮",
			th: "ทวินแคนนอน",
			id: "Twin Cannon"
		},

		damage: "140×",

		effect: {
			ja: "自分の手札から「基本エネルギー」を2枚までトラッシュし、その枚数×140ダメージ。",
			'zh-tw': "從自己的手牌將最多2張「基本【水】能量」卡丟棄，造成其張數×140點傷害。",
			th: "ทิ้งการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x140",
			id: "Buang paling banyak 2 lembar Energi Dasar {Air} dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 140 untuk tiap lembarnya."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card