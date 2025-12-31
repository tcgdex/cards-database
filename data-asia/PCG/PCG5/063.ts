import { Card } from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "delcatty",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [301],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "反応シフト",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、ポケモンの1つに取り付けられた反応エネルギーカードを別のポケモンに移動できます。 Delcattyが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "エネルギーリンク",
			},
			effect: {
				ja: "廃棄物の山を検索して、エネルギーカードを添付し、それをDelcattyに取り付けます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "尾のwhap",
			},
			damage: 40,
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
