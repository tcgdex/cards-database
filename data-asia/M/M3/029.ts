import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "Natsumi Yoshida",
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

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [35],

	thirdParty: {
		cardmarket: 867951,
		tcgplayer: 674348,
	},
};

export default card;