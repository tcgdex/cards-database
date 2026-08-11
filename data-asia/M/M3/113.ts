import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "メガジガルデex",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ガイアウェーブ"}, "damage": 200, "cost": ["Fighting", "Fighting", "Fighting"], "effect": {"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"}}, {"name": {"ja": "ムニキスゼロ"}, "cost": ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"], "effect": {"ja": "相手のポケモン全員に対して、それぞれ1回ずつコインを投げ、オモテが出たポケモン全員に、それぞれ150ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [718],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868123,
		tcgplayer: 674432,
	},
};

export default card;