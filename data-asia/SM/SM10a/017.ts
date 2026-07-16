import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムンナ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "悪い 夢に うなされている ポケモンや 人の 前に 現われ その夢を 食べてしまう ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みらいよち" },
			cost: ["Colorless"],
			effect: {
				ja: "自分または相手の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557296,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [517],
};

export default card;
