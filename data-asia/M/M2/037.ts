import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "モンメンの 吐く 綿を 使った 枕や 布団は 軽くて 通気の 良い 高級品だ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もってくる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を1枚引く。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [546],

	thirdParty: {
		cardmarket: 850544,
		tcgplayer: 655816,
	},
};

export default card;