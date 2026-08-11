import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "コフーライ",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "しげみの 陰に 隠れて 暮らす。 敵に 襲われると 体の 毛を 鋭く 逆立てて 威嚇する。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "かくれる"}, "cost": ["Grass"], "effect": {"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "コフキムシ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [665],

	thirdParty: {
		cardmarket: 867922,
		tcgplayer: 674327,
	},
};

export default card;