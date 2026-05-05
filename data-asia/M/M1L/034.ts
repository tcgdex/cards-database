import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "コジオ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ぶつかる"}, "damage": 10, "cost": ["Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [932],

	thirdParty: {
		cardmarket: 840329,
		tcgplayer: 647143,
	},
};

export default card;