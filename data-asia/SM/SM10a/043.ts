import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケンホロウ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "オスは 頭の 飾りを 揺らして 相手を 威嚇する。 メスの 飛行能力は オスを 上回る。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "かぜおこし" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ダウンバースト" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、おたがいのバトルポケモンについているすべてのカードを、それぞれの山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557322,
			},
		},
	],

	evolveFrom: {
		ja: "ハトーボー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [521],
};

export default card;
