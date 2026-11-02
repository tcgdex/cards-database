import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ソウブレイズ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "れんごくざん"}, "damage": 220, "cost": ["Fire"], "effect": {"ja": "自分の手札から「基本エネルギー」を4枚選び、トラッシュする。4枚トラッシュできないなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "グレンアルマex",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [937],

	thirdParty: {
		cardmarket: 850527,
		tcgplayer: 655799,
	},
};

export default card;