import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌマクロー",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ドロドロに ぬかるんだ 足場で 生活する うちに 鍛えられ 強靭な 足腰に なった。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だくりゅう" },
			damage: 20,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "なみのり" },
			damage: 70,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558984,
			},
		},
	],

	evolveFrom: {
		ja: "ミズゴロウ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [259],
};

export default card;
