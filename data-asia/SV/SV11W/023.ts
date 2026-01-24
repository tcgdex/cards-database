import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "スワンナ",
	},

	illustrator: "Mizue",
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
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		ja: "コアルヒー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [581],
	thirdParty: {
		cardmarket: 829025,
		tcgplayer: 636576,
	},
};

export default card;
