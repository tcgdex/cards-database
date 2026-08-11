import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピンシル（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [127],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "鎧",
			},
			effect: {
				'ja-jp': "対戦相手が手に5枚以上のカードを持っている場合、攻撃によってピンシルに与えられた損害は30減少します（脱力と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタコール",
			},
			effect: {
				'ja-jp': "カードにDがあるポケモンを探して、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ギロチン",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
