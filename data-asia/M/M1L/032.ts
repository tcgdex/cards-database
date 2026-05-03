import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "Tomomi Ozaki",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "あらゆる 影の 中に 潜りこむ 能力を もっているため 長い あいだ 誰にも 見つからなかった。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "シャドーソバット"}, "damage": 60, "cost": ["Fighting", "Fighting"], "effect": {"ja": "このワザのダメージで、相手のポケモンがきぜつしたなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [802],

	thirdParty: {
		cardmarket: 840327,
		tcgplayer: 647141,
	},
};

export default card;