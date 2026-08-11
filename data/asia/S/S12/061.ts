import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒藻龍",
		'th-th': "ดรามิโดโร",
		'ja-jp': "ドラミドロ"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用能夠腐蝕金屬的毒液將闖入自己地盤的油輪 化為碎屑，沉入大海。",
		'th-th': "ใช้ของเหลวพิษที่กัดกร่อนโลหะ จัดการกับเรือบรรทุกสินค้าที่เข้ามาในอาณาเขตของมันจนกลายเป็นซากจมลงในมหาสมุทร",
		'ja-jp': "金属を 腐らせる 毒液で 縄張りに 入りこんだ タンカーを 海の藻屑に してしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火箭猛毒",
			'th-th': "ร็อกเกตพอยซัน",
			'ja-jp': "ロケットポイズン"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在這個回合，若這隻寶可夢從「垃垃藻」進化，則因這個【中毒】而放置的傷害指示物的數量改為8個。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ] เทิร์นนี้ ถ้าโปเกมอนนี้วิวัฒนาการมาจาก [คูซูโม] แล้ว ด้วย[พิษ]นี้ จำนวนตัวนับแดเมจที่วางจะเป็น 8 ตัว",
			'ja-jp': "相手のバトルポケモンをどくにする。この番、このポケモンが「クズモー」から進化していたなら、このどくでのせるダメカンの数は8個になる。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "鰭快刀",
			'th-th': "ครีบใบมีด",
			'ja-jp': "ひれカッター"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680200,
				tcgplayer: 570119,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [691],
}

export default card