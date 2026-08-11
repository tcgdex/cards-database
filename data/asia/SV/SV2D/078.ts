import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コジオ"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	dexId: [932],
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "しおぬり"
		},

		effect: {
			'ja-jp': "自分のポケモン1匹のHPを「20」回復する。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "たいあたり"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707674,
				tcgplayer: 565940,
			},
		},
	],

	retreat: 3
}

export default card