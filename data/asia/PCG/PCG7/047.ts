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
	hp: 80,
	types: ["Metal"],
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
			cost: ["Metal", "Colorless"],
			name: {
				ja: "デルタの削減",
			},
			effect: {
				ja: "相手の次のターン中に、攻撃によってDeoxysに与えられた損害は30増加します（脱力感と抵抗を適用する前）。",
			},
			damage: 30,
		},
	],

	retreat: 2,

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
