import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ノノクラゲ",
		'zh-tw': "原野水母",
		'th-th': "โนโนะคุราเกะ",
		'id-id': "Toedscool"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細， 但跑起來能達到時速５０公里。",
		'th-th': "มีความคล้ายคลึงกับเมโนคุราเกะแต่ความจริงแล้วเป็นสายพันธุ์ที่ต่างกันโดยสิ้นเชิง แม้จะมีขาเรียวเล็กแต่เมื่อออกวิ่งจะมีความเร็วอยู่ที่ 50 กิโลเมตรต่อชั่วโมง",
		'id-id': "Meskipun mirip dengan Tentacool, Pokémon ini merupakan spesies yang berbeda. Kakinya ramping, tetapi kecepatan lari Toedscool mencapai 50 km/jam ketika berlari."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "キノコのほうし",
			'zh-tw': "蘑菇孢子",
			'th-th': "สปอร์เห็ด",
			'id-id': "Spora Jamur"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ぶつかる",
			'zh-tw': "衝撞",
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693084,
				tcgplayer: 568236,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card