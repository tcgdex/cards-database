import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アルクジラ",
		'zh-tw': "走鯨",
		'th-th': "อารุคุจิระ",
		'id-id': "Cetoddle"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "寒冷地で ５匹ほどの 群れを 作って 暮らす。 雪や 氷に 含まれる ミネラルが 大好き。",
		'zh-tw': "在寒冷地帶會組成約５隻規模的群體來生活。 喜歡雪或冰所含的礦物質。",
		'th-th': "อาศัยอยู่เป็นฝูงประมาณ 5 ตัวในบริเวณที่มีอากาศหนาวเหน็บ ชอบแร่ธาตุที่มีอยู่ในหิมะและน้ำแข็งเป็นอย่างมาก",
		'id-id': "Cetoddle hidup dan membentuk kelompok dengan jumlah sekitar 5 ekor di daerah yang dingin. Pokémon ini sangat menyukai mineral yang terkandung pada salju dan es."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "つらら",
			'zh-tw': "冰柱",
			'th-th': "น้ำแข็งย้อย",
			'id-id': "Pilar Es"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "するどいひれ",
			'zh-tw': "銳利鰭",
			'th-th': "ครีบแหลมคม",
			'id-id': "Sirip Tajam"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693099,
				tcgplayer: 568250,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card