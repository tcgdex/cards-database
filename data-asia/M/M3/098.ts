import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタルex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "デスソウル"}, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "残りHPが「50」以下の相手のポケモン全員を、それぞれきぜつさせる。"}}, {"name": {"ja": "ダークストライク"}, "damage": 210, "cost": ["Darkness", "Darkness", "Colorless"], "effect": {"ja": "次の自分の番、このポケモンは「ダークストライク」が使えない。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [717],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868108,
		tcgplayer: 674417,
	},
};

export default card;