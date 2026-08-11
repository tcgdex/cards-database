import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シードラ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "防御ポケモンは今混乱しています。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "アクアトリック",
			},
			effect: {
				'ja-jp': "防衛ポケモンに取り付けられた1つのエネルギーカードを相手のベンチ付きポケモンの1つに移動します。相手がベンチポケモンを持っていない場合、この効果は何もしません。",
			},
			damage: 30,
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
			stamp: ["1st edition"],
		},
	],
};

export default card
