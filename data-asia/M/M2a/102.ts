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

	attacks: [{"name": {"ja": "たぶらかす"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "いちゃもん"}, "cost": ["Darkness", "Colorless"], "damage": 30, "effect": {"ja": "相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [198],
};

export default card;
