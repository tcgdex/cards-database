import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのサンドスラッシュ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [28],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "迅速",
			},
			effect: {
				ja: "この攻撃の損傷は、衰弱、抵抗、ポケモンの力、または防御ポケモンに対するその他の影響の影響を受けません。",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ニードルボール",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
