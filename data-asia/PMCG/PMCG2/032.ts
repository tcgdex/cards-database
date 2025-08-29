import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "マロワク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [105],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ボネメラン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "友達を呼びます",
			},
			effect: {
				ja: "基本的なポケモンカードをファイティングで検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
