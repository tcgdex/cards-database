import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "未知",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [201],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "シャッフル",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）になったら、デッキを検索して別のデッキを検索して、未使用で切り替えることができます。 （未発生のダメージカウンター、特別な条件、およびその影響に添付されたカードは、新しいPokã©Mon。）にある場合は、デッキの上に置かれていません。その後、デッキをシャッフルします。ターンごとに1つ以上のシャッフルポカ - パワーを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "隠された力",
			},
			effect: {
				'ja-jp': "あなたの手からカードを選択して、それを表面下に置いてください。相手は、そのカードがポケモン、トレーナー、またはエネルギーカードであるかどうかを推測します。  カードを公開します。対戦相手が間違っていると推測した場合は、2枚のカードを描きます。カードを手に戻します。",
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
