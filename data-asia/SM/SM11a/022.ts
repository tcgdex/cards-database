import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "フィオネ",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "海の 温度が 高くなると 頭の 浮き袋を ふくらませて 海面を 集団で 漂う。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひきよせのうず" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、このポケモンについているカードをすべてトラッシュし、このポケモンを山札の下にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556613,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [489],
};

export default card;
