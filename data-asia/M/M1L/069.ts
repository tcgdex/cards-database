import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "0313",
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

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [802],

	thirdParty: {
		cardmarket: 840364,
		tcgplayer: 647178,
	},
};

export default card;