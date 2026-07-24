import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのハラバリーex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エレキストリーマー" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から「基本[L]エネルギー」を1枚選び、自分の「ナンジャモのポケモン」につける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サンダーボルト" },
			damage: 230,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861300,
			},
		},
	],

	evolveFrom: {
		ja: "ナンジャモのズピカ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [939],

	suffix: "EX",
};

export default card;
