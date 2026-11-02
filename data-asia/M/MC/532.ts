import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブロロローム",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "毒素と 岩の 成分を 混ぜた ガスを ８つに 増えた シリンダーで 爆発させ エネルギーを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あらくれダッシュ" },
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863834,
			},
		},
	],

	evolveFrom: {
		ja: "ブロロン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [966],
};

export default card;
