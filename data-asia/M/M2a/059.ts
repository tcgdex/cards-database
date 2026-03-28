import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナンジャモのタイカイデン",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "フラッシュドロー"}, "effect": {"ja": "自分の番に、このポケモンについている「基本エネルギー」を1個トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。"}}],

	attacks: [{"name": {"ja": "マッハボルト"}, "cost": ["Lightning", "Colorless", "Colorless"], "damage": 70}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ナンジャモのカイデン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [941],
};

export default card;
