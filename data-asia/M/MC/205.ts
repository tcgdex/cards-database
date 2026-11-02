import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しっぷうづき" },
			damage: "30+",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "この番に、このポケモンがベンチからバトル場に出ていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863501,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [647],

	suffix: "EX",
};

export default card;
