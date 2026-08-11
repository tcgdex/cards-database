import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとうらむ" },
			damage: 10,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863744,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [92],
};

export default card;
