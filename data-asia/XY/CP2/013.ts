import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "全身に 砂を まとうことで ばい菌から 体を 守る。 水に ぬれることが 苦手。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はなふんしゃ" },
			damage: 30,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563494,
				tcgplayer: 605339,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [449],
};

export default card;
