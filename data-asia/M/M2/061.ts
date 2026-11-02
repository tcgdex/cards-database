import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "ピンチになると 体を 丸めて  背中の とげとげを 逆立てると  でたらめに 電撃を 撃ちまくる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ともだちをさがす"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "かじる"}, "damage": 30, "cost": ["Metal"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [777],

	thirdParty: {
		cardmarket: 850568,
		tcgplayer: 655840,
	},
};

export default card;