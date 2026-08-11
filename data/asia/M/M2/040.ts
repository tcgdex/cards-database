import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "アノクサ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "成仏できない 魂が 風に 吹かれているうち 枯草を 巻き込んで ポケモンになった。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "そっとのせる"}, "cost": ["Psychic"], "effect": {"ja": "相手のポケモン1匹に、ダメカンを1個のせる。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [946],

	thirdParty: {
		cardmarket: 850547,
		tcgplayer: 655819,
	},
};

export default card;