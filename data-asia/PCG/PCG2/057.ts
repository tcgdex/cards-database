import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "スラコス",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [287],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "あくび",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "フレイル",
			},
			effect: {
				ja: "ダメージ数のダメージ数は、スラコスのダメージ数をカウンターします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
