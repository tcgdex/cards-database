import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フラージェス",
		'zh-tw': "花潔夫人",
		'th-th': "ฟลาเจส",
		'id-id': "Florges"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [671],
	hp: 140,
	types: ["Psychic"],

	description: {
		'ja-jp': "フラージェスの 作った 花園は 心と 体を 癒す パワーが 絶えず 降り注いでいるという。",
		'zh-tw': "據說花潔夫人打造的花園裡會源源不絕地傾注著 能夠治癒身心的力量。",
		'th-th': "ว่ากันว่าสวนดอกไม้ที่ฟลาเจสสร้างขึ้นมีพลังเยียวยาร่างกายและจิตใจแผ่ออกมาอย่างไม่มีวันหมด",
		'id-id': "Dikabarkan taman bunga buatan Florges tanpa henti mengalirkan kekuatan penenang jiwa dan raga."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ブルームガーデン",
			'zh-tw': "綻放花園",
			'th-th': "บลูมการ์เด้น",
			'id-id': "Bloom Garden"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員の弱点は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢的弱點全部消除。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ จุดอ่อนของโปเกมอนฝ่ายเราทุกตัว ทั้งหมดจะหายไป",
			'id-id': "Selama Pokémon ini ada di Arena, semua Pokémon sendiri menjadi tidak memiliki Kelemahan."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ムーンフォース",
			'zh-tw': "月亮之力",
			'th-th': "มูนฟอร์ซ",
			'id-id': "Moon Force"
		},

		damage: 120,

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้จะถูก [-30]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693119,
				tcgplayer: 568270,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card