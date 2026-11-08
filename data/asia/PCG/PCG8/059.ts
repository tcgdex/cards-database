import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Delcatty ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [301],
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "制約",
			},
			effect: {
				'ja-jp': "ターン中（攻撃前）に、このパワーを使用できます。各プレイヤーは、そのプレーヤーが手に6枚のカードを持っているまでカードを捨てます。 （最初に廃棄します。）Delcatty Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "上流",
			},
			effect: {
				'ja-jp': "すべてのエネルギーカードの廃棄パイルを検索します。この攻撃は、そこにあるエネルギーカードの数の10回ダメージを与えます。それらを相手に見せて、あなたのデッキの上に置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "テールスラップ",
			},
			damage: 60,
		},
	],


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
