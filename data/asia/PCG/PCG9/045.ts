import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガニウム（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [154],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "進化の呼びかけ",
			},
			effect: {
				'ja-jp': "ターン中に、手からMeganiumをプレイしてPokã©Monの1つを進化させると、基本的なPokã©MonまたはEvolutionカードの任意の組み合わせでデッキを最大3で検索できます。それらを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "デルタの削減",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、防御ポケモンからの攻撃によって与えられた損害は30増加します（脱力感と抵抗を適用する前に）。",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メガインパクト",
			},
			damage: 60,
		},
	],

	retreat: 2,

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
