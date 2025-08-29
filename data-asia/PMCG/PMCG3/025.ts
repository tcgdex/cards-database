import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "Sonicboom",
			},
			effect: {
				ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネトンはそれ自体に100のダメージを与えます。",
			},
			damage: 100,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
