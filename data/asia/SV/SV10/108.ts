import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のラッタ",
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "むこうみず" },
			damage: 90,
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてウラなら、このポケモンにも90ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821940,
				tcgplayer: 629049,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のコラッタ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [20],
};

export default card;
