import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "背中の 長い 毛は 導雷針。 落雷を 引き寄せ 雷を 浴びると 電気袋に 溜め込む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるくなる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ほうでん" },
			damage: "30×",
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーをすべてトラッシュし、その枚数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561622,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [777],
};

export default card;
