import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
	},

	illustrator: "Yoshimi Miyoshi",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おやつをえらぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から3枚トラッシュし、その中からカードを1枚選び、相手に見せて、手札に加える。",
			},
		},
		{
			name: { ja: "ビンタ" },
			damage: 30,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908288,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [877],
};

export default card;
