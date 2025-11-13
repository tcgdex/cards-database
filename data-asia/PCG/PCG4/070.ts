import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Hitmonlee",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [106],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "進化の段階",
			},
			effect: {
				ja: "Hitmonleeが進化したポカモンである限り、Hitmonlee攻撃は対戦相手のPokã©Monに20個のダメージを与えます（弱さと抵抗を適用する前）。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "ストレッチキック",
			},
			effect: {
				ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "メガキック",
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
