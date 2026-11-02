import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "悪い子の ところには ゲンガーが やってくる という 言い伝えは 世界中で 聞くことが できる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャドーペイン" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。ダメカン6個を、相手の「ポケモンGX・EX」に好きなようにのせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゆうやみどく" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557388,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [94],
};

export default card;
