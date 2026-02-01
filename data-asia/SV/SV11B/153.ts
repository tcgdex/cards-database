import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト",
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "トレーナーの 命令を よく 聞く 性格だが 難しい 指示は 理解 できない こともある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さぐる" },
			cost: ["Colorless"],
			effect: { ja: "相手の手札を見る。" },
		},
		{ name: { ja: "ふむ" }, damage: 10, cost: ["Colorless"] },
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [519],

	thirdParty: {
		cardmarket: 829412,
		tcgplayer: 636507,
	},
};

export default card;
