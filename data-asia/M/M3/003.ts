import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はなをとどける"}, "cost": ["Grass"], "effect": {"ja": "自分の山札からエネルギーを1枚選び、ベンチのポケモンにつける。そして山札を切る。"}}, {"name": {"ja": "リーフステップ"}, "damage": 30, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [492],

	thirdParty: {
		cardmarket: 867917,
		tcgplayer: 674322,
	},
};

export default card;