import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランプラー",
	},

	illustrator: "Sachiko Adachi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひばな" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557283,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [608],
};

export default card;
