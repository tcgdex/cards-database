import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく 噛みついてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとつっこむ" },
			damage: 40,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863461,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [158],
};

export default card;
