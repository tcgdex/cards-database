import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ラッタ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "後ろ足の 小さい 水かきで  海を 泳いで 島を 渡り  敵から 逃げていた という。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "こそげおとす"}, "damage": 20, "cost": ["Colorless"], "effect": {"ja": "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"}}, {"name": {"ja": "ぎゃくしゅうまえば"}, "damage": "40x", "cost": ["Colorless"], "effect": {"ja": "自分のベンチの「コラッタ」全員にのっているダメカンの数×40ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "コラッタ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [20],

	thirdParty: {
		cardmarket: 868102,
		tcgplayer: 674411,
	},
};

export default card;