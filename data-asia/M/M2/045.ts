import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ナックラー",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "乾燥した 砂漠に 生息。 すり鉢状の 巣穴の中で 獲物を じっと 待ち続ける。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "にどずつき"}, "damage": "10x", "cost": ["Fighting"], "effect": {"ja": "コインを2回投げ、オモテの数×10ダメージ。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [328],

	thirdParty: {
		cardmarket: 850552,
		tcgplayer: 655824,
	},
};

export default card;