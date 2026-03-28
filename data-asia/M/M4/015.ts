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

	attacks: [{"name": {"ja": "ほえたてる"}, "cost": ["Fire", "Colorless"], "damage": 80, "effect": {"ja": "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。"}}, {"name": {"ja": "ビッグバンファイヤー"}, "cost": ["Fire", "Fire", "Colorless"], "damage": "290－", "effect": {"ja": "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "シシコ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [668],
	suffix: "EX",
};

export default card;
