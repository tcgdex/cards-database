import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "アマルス",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "１億年前から 氷漬けに なっていた 体の 一部から 復活した 古代の ポケモン。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "こごえるかぜ"}, "damage": 50, "cost": ["Water", "Colorless"], "effect": {"ja": "相手のバトルポケモンをねむりにする。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "古びたヒレの化石",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [698],

	thirdParty: {
		cardmarket: 867941,
		tcgplayer: 674341,
	},
};

export default card;