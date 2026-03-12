import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "お尻からだけでなく 口からも 糸を 出すので 見ただけでは どっちが 頭か わからない。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ポイズンサークル"}, "damage": 50, "cost": ["Grass"], "effect": {"ja": "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "イトマル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [168],

	thirdParty: {
		cardmarket: 867916,
		tcgplayer: 674321,
	},
};

export default card;