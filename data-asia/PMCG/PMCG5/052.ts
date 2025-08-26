import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックの砂利",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [75],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "爆発します",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）ブロックの砂利機はそれ自体に50のダメージを与えます。スタジアムカードが再生されている場合は、捨ててください。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
