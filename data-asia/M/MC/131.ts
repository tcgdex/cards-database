import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャヒート",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "首の 付け根の 炎袋は 戦いに なると 火力が 上がり 鈴のような 音を 出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Fire"],
		},
		{
			name: { ja: "フレアストライク" },
			damage: 80,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フレアストライク」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863427,
			},
		},
	],

	evolveFrom: {
		ja: "ニャビー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [726],
};

export default card;
