import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エアロトレイル" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の場のポケモンについている[雷]エネルギーを好きなだけ、このポケモンにつけ替える。つけ替えた場合、このポケモンをバトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "てんくうのツメ" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
		{
			name: { ja: "カプサンダーGX" },
			damage: "50×",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについているエネルギーの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560065,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [785],

	suffix: "GX",
};

export default card;
