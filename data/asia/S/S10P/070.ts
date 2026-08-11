import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オリジンパルキアV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りょういきしはい" },
			cost: ["Water"],
			effect: {
				'ja-jp': "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ハイドロブレイク" },
			damage: 200,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651333,
				tcgplayer: 569913,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [484],
};

export default card;
