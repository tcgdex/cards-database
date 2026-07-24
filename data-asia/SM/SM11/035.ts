import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "スコルピ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "尻尾の ツメで 獲物を 挟み 毒を 送りこむ。毒が 効くまで 絶対に 放さない 執念。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで、1枚トラッシュする。",
			},
		},
		{
			name: { ja: "むしくい" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556997,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [451],
};

export default card;
