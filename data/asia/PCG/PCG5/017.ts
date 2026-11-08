import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグマー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [126],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "進化の段階",
			},
			effect: {
				'ja-jp': "マグマーが進化したポカモンである限り、マグマーに付着したすべてのエネルギーは通常のタイプではなく火災エネルギーです。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "線形攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "燃えるような感覚",
			},
			effect: {
				'ja-jp': "防衛ポケモンがすでにダメージカウンターを持っている場合、防御ポケモンは燃やされています。",
			},
			damage: 40,
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
