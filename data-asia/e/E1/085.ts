import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ジェンガー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "カオスは動きます",
			},
			effect: {
				ja: "ターン中（攻撃前）に、相手が3つ以下の賞品を持っている場合、1ポクモン（あなたまたは相手）から1つのダメージカウンターを別のポクモン（他のポクモンをノックアウトしても）に移動できます。 Gengarが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				ja: "影を隠します",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つを使用してGengarを切り替えます。",
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
