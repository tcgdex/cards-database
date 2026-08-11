import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギソウ",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "はっぱカッター"}, "damage": 60, "cost": ["Grass", "Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "フシギダネ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [2],

	thirdParty: {
		cardmarket: 840360,
		tcgplayer: 647174,
	},
};

export default card;