import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Eevee",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "テールワグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中にイービーを攻撃することはできません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
			},

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クイック攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
