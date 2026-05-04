import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "カヌチャン",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "たたく"}, "damage": 20, "cost": ["Metal"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [957],

	thirdParty: {
		cardmarket: 840343,
		tcgplayer: 647157,
	},
};

export default card;