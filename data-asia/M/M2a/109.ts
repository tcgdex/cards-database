import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルッグ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "皮を 首まで 引き上げて 防御の 姿勢。 ゴムのような 弾力で ダメージを 減らす。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はたきおとす"}, "cost": ["Darkness", "Colorless"], "damage": 20, "effect": {"ja": "相手の手札からオモテを見ないで1枚選び、トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [559],
};

export default card;
