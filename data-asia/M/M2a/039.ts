import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのバイバニラ",
	},

	illustrator: "imoniii",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "２つの 頭が 同時に 怒ると ツノから 猛吹雪を 噴き出す。 あたりを 大雪で 埋めてしまう。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "かさねゆき"}, "cost": ["Colorless", "Colorless"], "effect": {"ja": "相手のポケモン全員に、それぞれのっているダメカンの数が2倍になるように、ダメカンをのせる。"}}, {"name": {"ja": "ふぶき"}, "cost": ["Water", "Colorless", "Colorless"], "damage": 120, "effect": {"ja": "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "Nのバニリッチ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [584],
};

export default card;
