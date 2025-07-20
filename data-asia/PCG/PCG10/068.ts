import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Metagross Ex",
	},


	category: "Pokemon",
	dexId: [376],
	hp: 150,
	types: ["Metal"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "磁気再描画",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、Metagross ExがアクティブなPokã©Monである場合、このパワーを使用できます。各プレイヤーは自分の手をデッキにシャッフルします。次に、各プレイヤーが4枚のカードを描きます。 Metagross Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: {
				ja: "スキャンブラスト",
			},
			effect: {
				ja: "防御ポケモンと同じ名前を持つ相手のベンチ付きポケモンのそれぞれに70のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 70,
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
