import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "温かい ６本の 尻尾は 体が 育つごとに 毛並みが 良くなり 美しく なっていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けりつける" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908366,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [37],
};

export default card;
