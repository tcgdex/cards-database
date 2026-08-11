import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "エムリット",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "湖の 底で 眠っているが 魂が 抜け出して 水面を 飛び回ると 言われている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "せいじゃくのなみ" },
			effect: {
				ja: "自分の場に「アグノム」がいるなら、相手のポケモン全員の抵抗力は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マインドスプラッシュ" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチに「ユクシー」がいるなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559769,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [481],
};

export default card;
