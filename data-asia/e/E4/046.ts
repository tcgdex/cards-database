import { Card } from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスレアヴァス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [200],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "催眠芽球",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "にきびの贈り物",
			},
			effect: {
				ja: "プレイ中のポケモンの数をダメージカウンターで数えます。その多くのダメージカウンターを防御ポケモンに置きます。",
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
