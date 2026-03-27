import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガカエンジシex",
	},

	illustrator: "Keisuke Azuma",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほえたてる" },
			damage: 80,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンのワザのダメージは「50」少なくなる。",
			},
		},
		{
			name: { ja: "ビッグバンファイヤー" },
			damage: "290-",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメージカウンター1個につき、このワザのダメージは「10」少なくなる。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "シシコ",
	},

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [668],

	suffix: "EX",
};

export default card;
