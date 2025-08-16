import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "castform",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [351],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前）に（攻撃の前に）、晴れたキャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームを検索して、castFormで切り替えることができます。 （CastForm、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）シャッフルキャストフォームに戻ります。  1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "予報",
			},
			effect: {
				ja: "スタジアムカードを求めてデッキを検索してプレイしてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "余分なボール",
			},
			effect: {
				ja: "防御ポケモンがポケモンエクスの場合、この攻撃は20ダメージに20ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};
