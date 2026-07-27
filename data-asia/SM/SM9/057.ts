import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "オムスター",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "重いカラが 原因で 滅んだと 考えられている 古代ポケモン。 オクタンの 遠い 祖先 らしい。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かせきのしがらみ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場のポケモンの数が、相手より少ないなら、相手は手札からグッズを出して使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 60,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558383,
			},
		},
	],

	evolveFrom: {
		ja: "オムナイト",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [139],
};

export default card;
