import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "死者の 魂が 古代の 剣に 宿って 生まれたらしい。 人に とりつき 命を 吸う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スラッシュカッター" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557001,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [679],
};

export default card;
