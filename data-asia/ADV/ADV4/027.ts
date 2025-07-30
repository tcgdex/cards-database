import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "スノークラウドキャストフォーム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、雨のキャストフォーム、またはサニーキャストフォームを検索し、Snow-Cloud Castformで切り替えることができます。 （Snow-Cloud Castform、ダメージカウンター、特別な条件、およびそれに対する影響に取り付けられたカードは、現在、新しいPokã©Mon。にあります。）シャッフルスノークラウドキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "飛び回る",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "白い雪",
			},
			effect: {
				ja: "磁気嵐が発生している場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
