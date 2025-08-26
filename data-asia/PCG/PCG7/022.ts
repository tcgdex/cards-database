import { Card } from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		ja: "deoxys（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [386],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "フォームの変更",
			},
			effect: {
				ja: "ターン中（攻撃の前）になったら、デッキを別のdeoxysに検索し、Deoxysで切り替えることができます。 （Deoxys、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）になります。）デッキの上にDeoxysを置きます。その後、デッキをシャッフルします。ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "テレポーテーションバースト",
			},
			effect: {
				ja: "ベンチ付きポケモンの1つでデオキシを切り替えます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
