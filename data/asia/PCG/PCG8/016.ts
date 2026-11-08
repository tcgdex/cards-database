import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カメラプ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [323],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタ保護",
			},
			effect: {
				'ja-jp': "カードにある相手のPokã©Monからの攻撃により、カメラプトに与えられた損害は40削減されます（脱力感と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "線形攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "燃焼",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
