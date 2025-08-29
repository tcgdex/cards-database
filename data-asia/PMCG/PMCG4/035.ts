import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークアラカザム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [65],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "テレポートブラスト",
			},
			effect: {
				ja: "ベンチ付きポケモンを1枚置いて、暗いアラカザムを切り替えることができます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 30,
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				ja: "マインドショック",
			},
			effect: {
				ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
			damage: 40,
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
