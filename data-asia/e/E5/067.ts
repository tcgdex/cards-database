import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "ウルサリング",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [217],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "抱きしめる",
			},
			effect: {
				ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "レンド",
			},
			effect: {
				ja: "防御するポケモンがすでにダメージカウンターを持っている場合、この攻撃は40ダメージに加えて20のダメージを与えます。そうでない場合、この攻撃は40ダメージを与えます。",
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
			stamps: ["1st Edition"],
		},
	],
};

export default card
