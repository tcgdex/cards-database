import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペパーのノノクラゲ",
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "じめじめした 森の中で 暮らす。 剥がれ落ちた 体の ヒラヒラは 歯ごたえがあって とても 美味しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとつっこむ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863721,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [948],
};

export default card;
