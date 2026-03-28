import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのバニプッチ",
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吐く。 雪の 結晶を 作って あたりに 雪を 降らせる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なかまをよぶ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"}}, {"name": {"ja": "スノーアイス"}, "cost": ["Water", "Colorless"], "damage": 20}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [582],
};

export default card;
