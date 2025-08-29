import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "mewtwo",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "サイキック",
			},
			effect: {
				ja: "ディフェンディングポケモンに取り付けられた各エネルギーカードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
			},

		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "バリア",
			},
			effect: {
				ja: "この攻撃を使用するために、Mewtwoに取り付けられた1つのサイキックエネルギーカードを捨てます。対戦相手の次のターン中に、Mewtwoに行われた損害を含む攻撃のすべての影響を防ぎます。",
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
