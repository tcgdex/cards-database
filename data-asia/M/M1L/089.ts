import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガアブソルex",
	},

	illustrator: "Mitsuhiro Arita",
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
	rarity: "Special illustration rare",
	dexId: [359],

	suffix: "EX",

	thirdParty: {
		cardmarket: 840384,
		tcgplayer: 647198,
	},
};

export default card;