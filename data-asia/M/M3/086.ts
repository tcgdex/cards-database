import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "背中の 翼に 月の光を 集めることで 空中に 浮かぶことが できるらしい。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "このゆびとまれ"}, "cost": ["Psychic"], "effect": {"ja": "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"}}, {"name": {"ja": "はねまわる"}, "damage": 30, "cost": ["Psychic", "Psychic"]}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [35],

	thirdParty: {
		cardmarket: 868096,
		tcgplayer: 674405,
	},
};

export default card;