import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのライドン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [112],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ベンチガード",
			},
			effect: {
				ja: "BrockのRhydonがベンチに入れられている限り、ベンチに入ったPokmonが損傷したときはいつでも、代わりにBrockのRhydonにそのダメージを10回することがあります。 <em>（ベンチ付きポクモンの2つ以上が同時に破損している場合、それらのそれぞれに対してこのパワーを1回使用できます。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ラリアット",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
