import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ロトコール"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から、名前に「ロトム」とつくポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。"}}, {"name": {"ja": "ガジェットショー"}, "cost": ["Colorless", "Colorless"], "damage": "30×", "effect": {"ja": "自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479],
};

export default card;
