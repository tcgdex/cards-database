import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のラッタ",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "むこうみず" },
			damage: 90,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、すべてウラなら、このポケモンにも90ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863858,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロケット団のコラッタ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [20],
};

export default card;
