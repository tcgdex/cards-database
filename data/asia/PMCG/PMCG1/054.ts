import { Card } from "models/database/card"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イワーク",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "ロックスロー",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "硬化します",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、Onixに30以下の損傷が発生した場合（脱力感と抵抗を適用した後）、そのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
			},

		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575585
			},
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577012
			}
		}
	],
};

export default card
