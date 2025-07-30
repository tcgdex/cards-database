import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Wurmple",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [265],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "友達を呼びます",
			},
			effect: {
				ja: "デッキを草の基本的なポケモンを探して、あなたがあなたのベンチに好きなだけそれらの多くを置きます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "ストリングショット",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
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
