import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガアブソルex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "デスピリオド"}, "cost": ["Darkness", "Colorless"], "effect": {"ja": "相手のバトルポケモンにのっているダメカンが6個なら、そのポケモンをきぜつさせる。"}}, {"name": {"ja": "あくのかぎづめ"}, "damage": 200, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "相手の手札を見て、その中からカードを1枚選び、トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [359],

	suffix: "EX",

	thirdParty: {
		cardmarket: 840333,
		tcgplayer: 647147,
	},
};

export default card;