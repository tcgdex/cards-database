import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キラーメ",
		'zh-tw': "晶光芽",
		'th-th': "คิราเมะ",
		'id-id': "Glimmet"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [969],
	hp: 40,
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
			'ja-jp': "かくせい",
			'zh-tw': "覺醒",
			'th-th': "ปลุกพลัง",
			'id-id': "Kebangkitan"
		},

		effect: {
			'ja-jp': "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			'th-th': "เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด",
			'id-id': "Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746492,
				tcgplayer: 567511,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577359,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card