import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴマゾウ",
		'zh-tw': "小小象",
		'th-th': "โกมาโซ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "川辺に 巣穴を 作り 暮らす。 泥遊びをしたあとは 体を 洗わないと 落ち着かないのだ。",
		'zh-tw': "會在河邊做出巢穴棲息。玩完泥巴後如果不把身體 洗乾淨，就會渾身不自在。",
		'th-th': "ขุดหลุมเป็นรังอยู่ใกล้แม่น้ำ จะรู้สึกกระสับกระส่ายถ้าไม่ได้ล้างตัวหลังเล่นโคลน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "かいりき",
			'zh-tw': "怪力",
			'th-th': "พลังมหากาฬ"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ころがりタックル",
			'zh-tw': "滾動衝撞",
			'th-th': "กลิ้งโจมตี"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734263,
				tcgplayer: 566882,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card