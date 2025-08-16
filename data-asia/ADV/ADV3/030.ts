import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Grumpig",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [326],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "サイキックブーム",
			},
			effect: {
				ja: "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "マインドトリップ",
			},
			effect: {
				ja: "Grumpigと防御ポケモンがそれらに同じ量のエネルギーを持っている場合、防御ポケモンは混乱しています。",
			},
			damage: 50,
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
