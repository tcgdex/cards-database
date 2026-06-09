import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "レントラー",
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "レントラーの 透視能力は 危険な ものを 発見するとき とても 役に立つのだ。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "せめたてる"}, "damage": "70x", "cost": ["Lightning", "Colorless"], "effect": {"ja": "自分がすでにとったサイドの枚数×70ダメージ。"}}, {"name": {"ja": "ストロングボルト"}, "damage": 200, "cost": ["Lightning", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ルクシオ",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [405],

	thirdParty: {
		cardmarket: 867948,
		tcgplayer: 674346,
	},
};

export default card;