import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "約２０年前の 科学力で 生み出された ポケモンなので 今や 時代遅れな 部分も 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デジチャージ" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数ぶんまで、自分の山札にあるエネルギーを、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "とがる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557430,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [137],
};

export default card;
