import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "老木の てっぺんで 葉っぱの 団扇を あおぐと 木枯らしが 吹き 季節が 冬になると いわれる。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "とっぷうがえし"}, "cost": ["Grass"], "effect": {"ja": "コインを1回投げオモテなら、相手のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。"}}, {"name": {"ja": "まどわす"}, "damage": 100, "cost": ["Grass", "Colorless"], "effect": {"ja": "相手のバトルポケモンをこんらんにする。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ダーテングGX",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [275],

	thirdParty: {
		cardmarket: 840158,
		tcgplayer: 647118,
	},
};

export default card;