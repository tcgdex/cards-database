import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マクノシタ",
		'zh-tw': "幕下力士",
		'th-th': "มาคุโนชิตะ",
		'id-id': "Makuhita"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [296],
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "厳しい 稽古を 繰り返して 強くなる。 どんな 攻撃にも 耐える 根性の ポケモン。",
		'zh-tw': "會在不斷的嚴格訓練中逐漸變強。能夠承受任何攻擊， 是很有毅力的寶可夢。",
		'th-th': "ฝึกหนักซ้ำไปมาจนแกร่งขึ้น เป็นโปเกมอนที่เด็ดเดี่ยวทนทานต่อการโจมตีทุกประเภท",
		'id-id': "Makuhita menjadi kuat dengan melakukan latihan keras secara berulang kali. Pokémon bernyali kuat yang tahan terhadap serangan apa pun."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "はりて",
			'zh-tw': "巴掌撲擊",
			'th-th': "ฝ่ามือตบหน้า",
			'id-id': "Tamparan Menohok"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701101,
				tcgplayer: 568170,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card