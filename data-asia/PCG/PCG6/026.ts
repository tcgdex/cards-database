import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "雨のキャストフォーム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、サニーキャストフォーム、またはスノークラウドのキャストフォームを検索し、雨のキャストフォームで切り替えることができます。 （Rainキャストフォーム、ダメージカウンター、特別な条件、およびその影響に取り付けられたカードは、新しいPokã©Mon。）シャッフルレインキャストフォームにデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ホロンスプラッシュ",
			},
			effect: {
				ja: "30のダメージに加えて、Rain Castformに取り付けられた各ホロンエネルギーカードのダメージがさらに10件あります。",
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
