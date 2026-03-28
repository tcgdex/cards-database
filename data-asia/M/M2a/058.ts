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

	attacks: [{"name": {"ja": "でんこうせっか"}, "cost": ["Lightning"], "damage": "10＋", "effect": {"ja": "コインを1回投げオモテなら、20ダメージ追加。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [940],
};

export default card;
