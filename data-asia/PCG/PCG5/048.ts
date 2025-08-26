import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "マチョーク",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "妄想",
			},
			effect: {
				ja: "マチョークが混乱している限り、マチョークの攻撃は防御するポカン（脱力感と抵抗を適用する前）に50回以上のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "スプリットキック",
			},
			effect: {
				ja: "防御する各ポケモンに20のダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "マグナムパンチ",
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
