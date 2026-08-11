import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "普段は 木の上で 瞑想して 過ごす。 勝手にモンスターボールを 投げて ポケモンに 命令する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "けんじゃのといかけ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札からポケモンを1枚、ウラにして置く。その後、相手はそのポケモンのタイプを答える。そのカードをオモテにして、正解なら、相手は山札を4枚引く。不正解なら、自分は山札を4枚引く。そして置いたカードを手札にもどす。",
			},
		},
		{
			name: { ja: "ひっぱたく" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557041,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [765],
};

export default card;
