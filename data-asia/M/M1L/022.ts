import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "大きく 丈夫な 体を  くねらせ よじらせ 時速８０キロで  地面を 勢いよく 掘り進む。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "しめつける"}, "damage": 30, "cost": ["Colorless", "Colorless"], "effect": {"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"}}, {"name": {"ja": "かいりき"}, "damage": 100, "cost": ["Colorless", "Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Common",
	dexId: [95],

	thirdParty: {
		cardmarket: 840313,
		tcgplayer: 647131,
	},
};

export default card;