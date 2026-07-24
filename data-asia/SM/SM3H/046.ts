import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバット",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "真っ暗な 洞窟で 暮らす。 ２０万ヘルツの 超音波を 大きな 耳から 発射する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうそくいどう" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561110,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [714],
};

export default card;
