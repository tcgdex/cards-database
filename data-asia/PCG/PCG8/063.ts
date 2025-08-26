import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "マウィール",
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
				ja: "マイニング",
			},
			effect: {
				ja: "デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。そのカードがポケモンツールカードの場合、代わりにポケモンの1つに添付できます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "噛む",
			},
			effect: {
				ja: "防御ポケモンがポケモン-Exの場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
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
