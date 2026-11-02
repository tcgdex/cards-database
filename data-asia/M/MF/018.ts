import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヤミカラスを 見かけて 不用意に 後を つけていくと 迷わされ 山道に 置いてけぼりに される。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとつかむ" },
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908380,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [198],
};

export default card;
