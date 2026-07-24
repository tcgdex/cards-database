import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
	},

	illustrator: "Sachiko Adachi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひばな" },
			damage: 40,
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
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
		ja: "ヒトモシ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [608],
};

export default card;
