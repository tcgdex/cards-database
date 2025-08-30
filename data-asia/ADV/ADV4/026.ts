import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "雨のキャストフォーム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、サニーキャストフォーム、またはスノークラウドのキャストフォームを検索し、雨のキャストフォームで切り替えることができます。 （Rainキャストフォーム、ダメージカウンター、特別な条件、およびその影響に取り付けられたカードは、新しいPokã©Mon。）シャッフルレインキャストフォームにデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "散らばったシャワー",
			},
			effect: {
				ja: "あなたの手をあなたのデッキにシャッフルします。最大5枚のカードを作成します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "雨の日の青",
			},
			effect: {
				ja: "低圧システムが機能している場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

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
