import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハリテヤマ",
		'zh-tw': "鐵掌力士",
		th: "ฮาริเทยามะ",
		id: "Hariyama"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [297],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "力くらべが 大好き。 走ってくる 列車を 張り手で 止めてしまう パワーを 持つ。",
		'zh-tw': "最喜歡和對手比力氣。擁有的力量足以一掌擋下 迎面馳來的列車。",
		th: "ชอบประลองกำลังมาก มีพละกำลังขนาดใช้ท่าตีหน้าหยุดรถไฟที่กำลังวิ่งอยู่ได้",
		id: "Hariyama sangat menyukai adu kekuatan. Pokémon ini memiliki kekuatan yang dapat menghentikan kereta yang sedang melaju dengan dorongan telapak tangannya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "つっぱりげいこ",
			'zh-tw': "猛推演練",
			th: "ฝึกซ้อมผลักกระแทก",
			id: "Menggembleng Sodokan Tangan"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的寶可夢招式的傷害「-10」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอนฝ่ายเราทุกตัว จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-10]",
			id: "Selama Pokémon ini ada di Arena, kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon sendiri berkurang sejumlah 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ロケットはりて",
			'zh-tw': "火箭巴掌",
			th: "ฝ่ามือตบจรวด",
			id: "Tamparan Menohok Roket"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701102
	}
}

export default card