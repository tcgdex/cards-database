import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い催眠",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [97],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "psypunch",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "ベンチ操作",
			},
			effect: {
				ja: "対戦相手は、ベンチのポケモンの数に等しい数のコインをひっくり返します。この攻撃は、尾の数に20回のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
			},
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
