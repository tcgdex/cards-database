import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "パールル",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "頑丈な 殻に 守られて 一生の うちに １個だけ 見事な 真珠を 作る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬけがけしんか" },
			effect: {
				ja: "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たまのかがやき" },
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
				cardmarket: 558988,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [366],
};

export default card;
