import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "しっぽで 汚れを 払い落す。 掃除を するときに 助かるが 潔癖症 なので 大変。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "おそうじ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752840,
				tcgplayer: 568393,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [572],
};

export default card;
