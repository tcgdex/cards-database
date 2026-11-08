import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘑蘑菇",
		'ja-jp': "キノココ"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會從頭頂上噴出毒孢子。如果不小心吸入了孢子， 身上的每處關節都會開始疼痛。",
		'ja-jp': "頭の てっぺんから 毒胞子を 噴き出す。 胞子を 吸いこむと 体の 節々が 痛くなる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			'ja-jp': "ずつき"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605854,
				tcgplayer: 569631,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [285],
}

export default card