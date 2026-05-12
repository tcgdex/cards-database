import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのカイデン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "翼の 骨は 風を 受けると 電気を 作る。 海に 飛び込み 獲物を 感電させて 捕らえる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "でんこうせっか"}, "damage": "10+", "cost": ["Lightning"], "effect": {"ja": "コインを1回投げオモテなら、20ダメージ追加。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [940],
};

export default card;
