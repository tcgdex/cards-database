import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバット",
	},

	illustrator: "Eri Kamei",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "２０万ヘルツの 超音波を 浴びると 屈強な レスラーも 目が 回り 立っていられないのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ガラクタはこび"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "かみつく"}, "cost": ["Psychic", "Darkness"], "damage": 30}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [714],
};

export default card;
