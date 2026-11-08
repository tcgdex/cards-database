import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オマニテ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [138],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "古代の触手",
			},
			effect: {
				'ja-jp': "あなたのオマニテ、オマスター、カブト、カブトップス、またはカブトップスの元によって相手のポカモンに与えられた損害は抵抗の影響を受けません。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "上昇する突進",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
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
