import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "月のない 夜。 ゴーストは 呪う 相手を 探しているので 出歩かない 方が いいぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふきつなきり" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。相手のベンチポケモン全員に、それぞれダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557387,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [93],
};

export default card;
