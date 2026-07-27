import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドデカバシ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "体内の ガスを クチバシの 中で 爆発させ 木のタネを 発射。 大岩も 粉々にする パワー。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ヒートビーク" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ドデカほう" },
			damage: 160,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンに進化していたなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558715,
			},
		},
	],

	evolveFrom: {
		ja: "ケララッパ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [733],
};

export default card;
