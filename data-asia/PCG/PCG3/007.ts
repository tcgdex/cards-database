import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ホッピップ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [187],
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "バッファ",
			},
			effect: {
				ja: "ホッピップが対戦相手の攻撃によってノックアウトされる場合、コインをひっくり返します。ヘッドの場合、ホッピップはノックアウトされず、残りのHPは代わりに10になります。",
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
		},
	],

	retreat: 1,

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
