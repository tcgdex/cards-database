import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポチエナ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "しつこい 性格の ポケモン。 目をつけた 獲物が ヘトヘトに 疲れるまで 追いかけ回す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじりつくす" },
			damage: "30+",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863753,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [261],
};

export default card;
