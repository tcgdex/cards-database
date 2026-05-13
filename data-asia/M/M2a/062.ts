import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のナッシー",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "ごくまれに 頭の どれか ひとつが 地面に 落ちると タマタマになって 動きだすという。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "トライキネシス"}, "damage": "", "cost": [], "effect": {"ja": "コインを3回投げ、すべてオモテなら、相手のポケモンを1匹選び、きぜつさせる。"}}, {"name": {"ja": "すてみタックル"}, "damage": "150", "cost": ["Psychic"], "effect": {"ja": "このポケモンにも30ダメージ。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ロケット団のタマタマ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
