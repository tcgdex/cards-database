import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "体の 中の 炎を 燃やして 頭や 尻尾から 火の粉を まき散らせて 敵を 焦がす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルスマッシュ" },
			damage: "70×",
			cost: ["Fire"],
			effect: {
				ja: "コインを2回投げ、オモテの数×70ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863411,
			},
		},
	],

	evolveFrom: {
		ja: "バオップ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [514],
};

export default card;
