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

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほえたてる" },
			damage: 80,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。",
			},
		},
		{
			name: { ja: "ビッグバンファイヤー 290-" },
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877330,
			},
		},
	],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Ultra Rare",
	dexId: [668],

	suffix: "EX",
};

export default card;
