import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "テラパゴス",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "テラスタルの 甲羅は 相手の 技を 受けると そのエネルギーを 吸い取って 自分のものにする。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "プリズムチャージ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、自分の「テラスタル」のポケモンに好きなようにつける。そして山札を切る。"}}, {"name": {"ja": "ハードタックル"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 100}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [1024],
};

export default card;
