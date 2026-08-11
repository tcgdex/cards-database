import { Card } from "models/database/card";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マンムー",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "１万年前の 氷の 下から 発見されたことも あるほど 大昔から いた ポケモン。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "ぶちこわす"}, "damage": "120+", "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "場にスタジアムが出ているなら、120ダメージ追加。その後、そのスタジアムをトラッシュする。"}}, {"name": {"ja": "ブリザードエッジ"}, "damage": 200, "cost": ["Water", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを2個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		'ja-jp': "イノムー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [473],

	thirdParty: {
		cardmarket: 850532,
		tcgplayer: 655804,
	},
};

export default card;