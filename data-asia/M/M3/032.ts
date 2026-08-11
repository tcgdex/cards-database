import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "強力な サイコパワーが 漏れ出さないように 放出する 器官を 耳で ふさいでいるのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ひとやすみ"}, "cost": ["Colorless"], "effect": {"ja": "このポケモンのHPを「20」回復する。"}}, {"name": {"ja": "ふむ"}, "damage": 10, "cost": ["Psychic"]}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [677],

	thirdParty: {
		cardmarket: 867954,
		tcgplayer: 674351,
	},
};

export default card;