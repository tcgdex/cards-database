import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "スワンナ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "夜明けと ともに スワンナたちは 踊りはじめる。 真ん中で 踊る スワンナが 群れの リーダー。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "はばたく" }, damage: 30, cost: ["Colorless"] },
		{
			name: { ja: "エアスラッシュ" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "コアルヒー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [581],
	thirdParty: {
		cardmarket: 829463,
		tcgplayer: 636660,
	},
};

export default card;
