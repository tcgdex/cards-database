import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "スキプルーム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [188],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "バッファ",
			},
			effect: {
				ja: "スカイプルームが相手の攻撃によってノックアウトされる場合は、コインをひっくり返します。ヘッドの場合、スキプルームはノックアウトされず、残りのHPは代わりに10になります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ミラクルパウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、1つの特別な条件を選択します。防御ポケモンは現在、その特別な状態の影響を受けています。",
			},
			damage: 10,
		},
	],


	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
