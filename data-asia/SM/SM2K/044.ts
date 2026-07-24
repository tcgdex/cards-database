import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "スバメ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "強い 相手にも 勇敢に 立ち向かう 根性の 持ち主。 暖かい 土地を 目指して 飛ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561510,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [276],
};

export default card;
