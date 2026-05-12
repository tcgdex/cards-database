import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のヤミカラス",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "夜 姿を 見かけると 不吉なことが 起きると 信じられ 忌み嫌われている ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たぶらかす"}, "damage": "", "cost": ["Colorless"], "effect": {"ja": "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "いちゃもん"}, "damage": "30", "cost": ["Darkness"], "effect": {"ja": "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [198],
};

export default card;
