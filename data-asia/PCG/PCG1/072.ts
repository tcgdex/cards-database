import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "同上",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [132],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "フォームバリエーション",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度（攻撃の前）、基本的なPokã©Mon（Pokã©Mon-ExおよびDittoを除く）を廃棄パイルを検索し、Dittoで切り替えることができます。 （同上、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）にあります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーボール",
			},
			effect: {
				ja: "10ダメージに加えて、同上に付着した各エネルギーの10ダメージをさらに10ダメージしますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
