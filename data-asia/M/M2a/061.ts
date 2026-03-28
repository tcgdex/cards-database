import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のタマタマ",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "タマタマだけに 伝わる テレパシーを 出し合っているので どんなときでも ６匹 集まれる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ねんじる"}, "cost": ["Psychic"], "damage": "10＋", "effect": {"ja": "コインを1回投げオモテなら、20ダメージ追加。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [102],
};

export default card;
