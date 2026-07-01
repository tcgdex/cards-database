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
			name: {
				ja: "ほえたてる",
			},
			damage: 80,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。",
			},
		},
		{
			name: {
				ja: "ビッグバンファイヤー",
			},
			damage: "290-",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [668],
	suffix: "EX",

	thirdParty: {
		cardmarket: 876914
	}
};

export default card;
