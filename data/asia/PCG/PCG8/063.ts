import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マウィール",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [303],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "マイニング",
			},
			effect: {
				'ja-jp': "デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。そのカードがポケモンツールカードの場合、代わりにポケモンの1つに添付できます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "噛む",
			},
			effect: {
				'ja-jp': "防御ポケモンがポケモン-Exの場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
