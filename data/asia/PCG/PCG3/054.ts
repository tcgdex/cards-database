import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "セントレット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [161],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "友達の検索",
			},
			effect: {
				'ja-jp': "デッキのトップ5カードを見てください。そこにある基本的なポケモンまたはエボリューションカードを選択し、相手に見せて、手に入れてください。他の4枚のカードをデッキの上に戻します。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "奇襲",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
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
			stamp: ["1st edition"],
		},
	],
};

export default card
