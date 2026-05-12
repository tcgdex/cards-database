import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガユキメノコex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],

	stage: "Stage1",

	attacks: [{"name": {"ja": "うらみぶし"}, "damage": "50x", "cost": ["Water"], "effect": {"ja": "相手の手札の枚数×50ダメージ。"}}, {"name": {"ja": "アブソリュートスノー"}, "damage": "150", "cost": ["Water"], "effect": {"ja": "相手のバトルポケモンをねむりにする。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ユキワラシ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
