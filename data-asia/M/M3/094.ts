import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュートex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "わるだくみ"}, "cost": ["Fire"], "effect": {"ja": "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"}}, {"name": {"ja": "フェイタルネイル"}, "damage": 100, "cost": ["Fire", "Fire"], "effect": {"ja": "相手のバトルポケモンをどくとやけどにする。このポケモンをベンチポケモンと入れ替える。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [758],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868104,
		tcgplayer: 674413,
	},
};

export default card;