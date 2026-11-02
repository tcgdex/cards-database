import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラダグトリオ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "大地の 女神たちの 化身と 考えられ アローラ地方では とても 大切に されている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "モグラッシュ" },
			damage: 60,
			cost: [],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558924,
			},
		},
	],

	evolveFrom: {
		ja: "アローラディグダ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [51],
};

export default card;
