import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ランプラー",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "魂を 吸いとり 火を灯す。 人が 死ぬのを 待つため 病院を うろつくようになった。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おにび" },
			damage: 30,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561408,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトモシ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [608],
};

export default card;
