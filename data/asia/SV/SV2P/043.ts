import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キラーメ",
		'zh-tw': "晶光芽",
		'th-th': "คิราเมะ",
		'id-id': "Glimmet"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "洞窟の 壁から 栄養分を 吸収。 毒の 結晶で できた 花びらを 身にまとう。",
		'zh-tw': "會從洞窟的壁上吸取養分。包覆在身上的花瓣 是用毒的結晶做成的。",
		'th-th': "ดูดซับสารอาหารจากผนังถ้ำ ร่างกายห่อหุ้มด้วยกลีบดอกไม้ที่เป็นผลึกพิษ",
		'id-id': "Glimmet menyerap nutrisi dari dinding gua. Kelopak bunga yang terbuat dari kristal beracun menyelimuti tubuh Pokémon ini."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "いわおとし",
			'zh-tw': "落石",
			'th-th': "หินผาถล่ม",
			'id-id': "Lemparan Batu"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705276,
				tcgplayer: 567800,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card