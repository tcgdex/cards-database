import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "サナギラス",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "岩盤のような 硬い 殻に 覆われているが 力は 強く 暴れると 山も 崩れてしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "しっぺがえし" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のサイドの残り枚数が1枚なら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558590,
			},
		},
	],

	evolveFrom: {
		ja: "ヨーギラス",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [247],
};

export default card;
