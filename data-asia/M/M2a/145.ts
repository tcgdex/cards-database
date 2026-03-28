import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "テラパゴスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ユニオンビート"}, "cost": ["Colorless", "Colorless"], "damage": "30×", "effect": {"ja": "このワザは、後攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。"}}, {"name": {"ja": "クラウンオパール"}, "cost": ["Grass", "Water", "Lightning"], "damage": 180, "effect": {"ja": "次の相手の番、このポケモンはたねポケモン（ポケモンをのぞく）からワザのダメージを受けない。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
