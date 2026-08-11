import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "castform",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "気質の天気",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に（攻撃の前に）、晴れたキャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームを検索して、castFormで切り替えることができます。 （CastForm、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）シャッフルキャストフォームに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ホロンドロー",
			},
			effect: {
				'ja-jp': "カードを描きます。 CastFormにHolon Energy Cardsが接続されている場合は、さらに2枚のカードを描画します。",
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
