import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "体中の 鋭利な 刃で 容赦なく 相手を 切り刻む。 勝つために 手段は 選ばない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いあいぎり" },
			damage: 30,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863774,
			},
		},
	],

	evolveFrom: {
		ja: "コマタナ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [625],
};

export default card;
