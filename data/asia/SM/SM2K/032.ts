import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ドジョッチ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "２本のヒゲは 敏感なレーダー。 泥で 濁った 水の 中でも 獲物の 位置を 察知するぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "どろかけ" },
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561498,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [339],
};

export default card;
