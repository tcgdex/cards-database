import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "未知",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "シャッフル",
			},
			effect: {
				ja: "ターン中（攻撃の前）になったら、デッキを検索して別のデッキを検索して、未使用で切り替えることができます。 （未発生のダメージカウンター、特別な条件、およびその影響に添付されたカードは、新しいPokã©Mon。）にある場合は、デッキの上に置かれていません。その後、デッキをシャッフルします。ターンごとに1つ以上のシャッフルポカ - パワーを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "隠された力",
			},
			effect: {
				ja: "相手の手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。",
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
