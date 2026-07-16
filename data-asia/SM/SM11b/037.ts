import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーテリー",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "判断力に 優れた ポケモン。 勝てない 相手と 判断したら さっさと シッポを 巻いて 逃げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つぶらなひとみ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555216,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [506],
};

export default card;
