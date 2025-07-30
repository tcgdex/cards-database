import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "日当たりの良いキャストフォーム",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "気質の天気",
			},
			effect: {
				ja: "ターン中（攻撃の前に）ターン中に、キャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームをデッキで検索し、日当たりの良いキャストフォームで切り替えることができます。 （サニーキャスト、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。にあります。）サニーキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "サンシャイン",
			},
			effect: {
				ja: "スタジアムカードを廃棄することを検索し、対戦相手に見せて、手に入れてください。",
			},
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "日焼け",
			},
			effect: {
				ja: "高圧システムが再生されている場合、防御ポケモンが燃やされます。",
			},
			damage: 40,
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
