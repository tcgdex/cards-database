import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。のんきに 見せかけて 抜け目なく 周囲を うかがう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねてみる" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727982,
				tcgplayer: 587831,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [656],
};

export default card;
