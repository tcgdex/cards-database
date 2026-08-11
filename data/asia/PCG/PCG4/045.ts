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
				'ja-jp': "対戦相手の廃棄パイルを検索して、サポーターカードを使用し、この攻撃の効果としてそのカードの効果を使用します。 （サポーターカードは相手の廃棄パイルに残ります。）",
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
