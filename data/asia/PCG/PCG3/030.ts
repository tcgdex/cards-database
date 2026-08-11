import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Delibird",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [225],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ギフト交換",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）、DelibirdがアクティブなPokã©Monである場合、1枚のカードを手からデッキにシャッフルすることができます。次に、カードを描きます。 Delibirdが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "お土産",
			},
			effect: {
				'ja-jp': "3コインをフリップします。それらの1つがヘッドである場合、防御ポケモンに4つのダメージカウンターを入れます。 2つがヘッドの場合は、防御ポケモンから1つのダメージカウンターを取り外します。それらがすべてヘッドである場合、ディフェンディングポケモンに10のダメージカウンターを入れます。それらのすべてが尾の場合、防御ポケモンからすべてのダメージカウンターを削除します。",
			},
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
