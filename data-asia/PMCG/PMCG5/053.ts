import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのゴーレム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [76],
	hp: 90,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ロックスライド",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、最大3つのポケモンを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "亀裂",
			},
			damage: 50,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
