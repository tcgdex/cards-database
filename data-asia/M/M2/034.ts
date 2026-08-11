import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "パーモット",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "普段は おっとりしているが いざ 戦いになると 電光石火の 身のこなしで 敵を 叩きのめす。",
	},

	stage: "Stage2",

	attacks: [{"name": {"ja": "ボルテージフィスト"}, "damage": 130, "cost": ["Lightning", "Lightning"], "effect": {"ja": "のぞむなら、このポケモンにも60ダメージを与え、相手のバトルポケモンをマヒにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "パモット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [923],

	thirdParty: {
		cardmarket: 850541,
		tcgplayer: 655813,
	},
};

export default card;