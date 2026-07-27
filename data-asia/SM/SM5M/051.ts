import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "デカグース",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "コラッタや ラッタが 好物なのに 昼行性のため 出会えない。 忍耐強さが 自慢の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきとめる" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にポケモンがあるなら、80ダメージ追加。",
			},
		},
		{
			name: { ja: "はりたおす" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559864,
			},
		},
	],

	evolveFrom: {
		ja: "ヤングース",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [735],
};

export default card;
