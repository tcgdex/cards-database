import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "gardevoir（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [282],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エネルギージャンプ",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、ポカンの1つにアタッチされたエネルギーカードを別のポケモンに移動できます。 Gardevoirが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "サイキックレイジ",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対するGardevoirの各ダメージカウンターに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "ブラックマジック",
			},
			effect: {
				ja: "10ダメージに加えて、対戦相手のベンチポケモンの数のダメージがさらにさらに多くなります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
