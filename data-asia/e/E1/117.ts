import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Gengar -117/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [94],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "カオスは動きます",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、相手が3つ以下の賞品を持っている場合、1ポクモン<em>（あなたまたは相手）から1ダメージカウンターを別の<em>に移動することができます（他のPokmonをノックアウトしても）</em>。 Gengarが特別な状態の影響を受けている場合、このパワーは使用できません。",
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
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
