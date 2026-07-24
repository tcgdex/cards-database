import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "大人しい 寂しがり屋 だけど ボロ切れの 中身を 見ようとすると 激しく 嫌がり 抵抗する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドーボックス" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場のダメカンがのっている「ポケモンGX」の特性は、すべてなくなる",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しっぽでまどわす" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "インを1回投げオモテなら、相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543856,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [778],
};

export default card;
