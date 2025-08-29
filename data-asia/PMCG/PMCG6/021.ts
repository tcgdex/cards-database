import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョヴァンニのニドキング",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [34],
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "威圧します",
			},
			effect: {
				ja: "ディフェンディングポケモンの最大HPが50以下の場合、相手の次のターン中にジョバンニの気分を害することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass", "Colorless"],
			name: {
				ja: "タンブリング攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて30ダメージを与えます。尾の場合、この攻撃は40ダメージを与えます。",
			},
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
