import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンダー",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "雷",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、Zapdosはそれ自体に30のダメージを与えます。",
			},
			damage: 60,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				'ja-jp': "落雷",
			},
			effect: {
				'ja-jp': "Zapdosに取り付けられたすべてのエネルギーカードを廃棄するか、この攻撃は何もしません。",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575616
			},
		},
		{
			type: "holo",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577043
			}
		}
	],
};

export default card
