import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オトシドリ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "胸元の 袋で エサを 包み 巣に 持ち帰る。 大きな 音の するものを 落として 喜ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 70,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにも20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863787,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [962],
};

export default card;
