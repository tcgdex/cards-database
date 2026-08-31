import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "しっぽの 穴から 空気を 取りこみ 炎を 燃やす。 穴を 塞がれると 具合が 悪くなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はかいび" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899881,
				tcgplayer: 709172,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [631],
};

export default card;
