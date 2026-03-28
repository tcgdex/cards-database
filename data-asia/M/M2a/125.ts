import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハクリュー",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "水晶のような 玉には 天候を 自由に 操る 能力が 秘められているらしい。",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "しんかのみちびき"}, "effect": {"ja": "このポケモンにエネルギーがついているなら、自分の番に1回使える。自分の山札から進化ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "しっぽのムチ"}, "cost": ["Water", "Lightning"], "damage": 60}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ミニリュウ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [148],
};

export default card;
