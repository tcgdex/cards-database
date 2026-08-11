import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マチョップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スマッシュパンチ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "逃げる",
			},
			effect: {
				'ja-jp': "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",

		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
