import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "カエンジシex",
	},

	illustrator: "",
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

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [668],
	suffix: "EX",
};

export default card;
