import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Pidgeot -091/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [18],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "翼を鼓動します",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、PidgeotがアクティブなPokmonである場合、ベンチ付きPokmonの1つをシャッフルすることができます。すべてのカードがデッキに取り付けられます。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "シャープなくちばし",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
