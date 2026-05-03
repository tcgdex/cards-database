import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "オニスズメ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "羽が 短く 長い 距離を  飛べない。 せわしなく 動き  まわって むしポケモンを ついばむ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ついばむ"}, "damage": 10, "cost": ["Colorless"], "effect": {"ja": "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [21],

	thirdParty: {
		cardmarket: 840347,
		tcgplayer: 647161,
	},
};

export default card;