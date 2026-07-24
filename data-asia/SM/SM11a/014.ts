import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "食べるほどに 燃やすものが 増えて 胃袋内の 炎が 強まり パワーも どんどん あふれ出すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "ヒートスタンプ" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556590,
			},
		},
	],

	evolveFrom: {
		ja: "ポカブ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [499],
};

export default card;
