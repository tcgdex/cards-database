import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のコラッタ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あぶないまえば" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863857,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [19],
};

export default card;
