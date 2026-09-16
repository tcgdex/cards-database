import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホゲータex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ごきげんフレイム" },
			damage: "70×",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "自分がすでにとったサイドの枚数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908187,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [909],

	suffix: "EX",
};

export default card;
