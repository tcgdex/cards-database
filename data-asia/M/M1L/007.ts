import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "生息地を 広げるため 木の実の 振りをして 鳥ポケモンに つかまり 遠くまで 運んでもらうのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひとやすみ"}, "cost": ["Colorless"], "effect": {"ja": "このポケモンのHPを「20」回復する。"}}, {"name": {"ja": "タネばくだん"}, "damage": 20, "cost": ["Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [273],

	thirdParty: {
		cardmarket: 840156,
		tcgplayer: 647116,
	},
};

export default card;