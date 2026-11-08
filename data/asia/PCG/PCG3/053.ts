import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラッタタ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [19],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "スクランブル",
			},
			effect: {
				'ja-jp': "対戦相手が彼または彼女のアクティブなPokã©MonとしてPokã©Mon-Exを持っている限り、Rattataのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "フューリースワイプ",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
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
