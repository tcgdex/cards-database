import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アラカザム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [65],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "エネルギージャンプ",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に、エネルギーカードをポケモンの1匹からポケモンの別のものに移動できます。アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "サイキック",
			},
			effect: {
				'ja-jp': "この攻撃は、防御ポケモンに取り付けられた各エネルギーカードに対して30のダメージと10のダメージをさらに10件以上与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
