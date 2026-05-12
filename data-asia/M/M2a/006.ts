import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "アゲハント",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "色 鮮やかな 羽の 模様が 特徴。  細い 口を 伸ばして  花の 甘い ミツを 吸い取る。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "しびれごな"}, "damage": "40", "cost": ["Grass"], "effect": {"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"}}, {"name": {"ja": "エナジーストロー"}, "damage": "80x", "cost": ["Grass"], "effect": {"ja": "相手の手札を見て、その中にあるエネルギーの枚数×80ダメージ。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [267],
};

export default card;
