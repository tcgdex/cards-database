import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "フォークナーのデリビード",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "パッケージ配信",
			},
			effect: {
				ja: "FalknerのDelibirdとすべてのカードをデッキの上に置きます。デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。ベンチ付きポケモンがない場合、この攻撃は何もしません。",
			},
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
