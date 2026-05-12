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
		{ "name": { "ja": "ほえたてる" }, "damage": "80", "cost": ["Fire"], "effect": { "ja": "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。" } },
		{ "name": { "ja": "ビッグバンファイヤー" }, "damage": "290－", "cost": ["Fire", "Fire"], "effect": { "ja": "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "シシコ",
	},
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
