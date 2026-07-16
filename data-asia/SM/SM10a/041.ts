import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト",
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "とても 忘れっぽい ポケモンで トレーナーに 命令 されたのに 新しい 命令を 待っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かっくう" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557320,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [519],
};

export default card;
