import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "Kazuhisa Uragami",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "メスのみが フェロモンを 発する ガスを 作れる。 骨抜きにされた オスは メスの 言いなりになるぞ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ほのおのツメ"}, "damage": 20, "cost": ["Fire"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [757],

	thirdParty: {
		cardmarket: 867929,
		tcgplayer: 674334,
	},
};

export default card;