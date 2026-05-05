import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "背中の アームから  体内の 水蒸気を 噴射する。  山 ひとつ 吹き飛ばす 威力。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "こがす"}, "cost": ["Fire"], "effect": {"ja": "相手のバトルポケモンをやけどにする。"}}, {"name": {"ja": "バックファイヤー"}, "damage": 130, "cost": ["Fire", "Fire", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーを2個選び、手札にもどす。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [721],

	thirdParty: {
		cardmarket: 840163,
		tcgplayer: 647123,
	},
};

export default card;