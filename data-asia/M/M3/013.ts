import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノヤコマ",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "お腹の 炎袋の 火力が 強まるほど 速く 飛べるが 点火するまで 時間が かかる。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ほのお"}, "damage": 60, "cost": ["Fire", "Fire"]}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ヤヤコマ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [662],

	thirdParty: {
		cardmarket: 867927,
		tcgplayer: 674332,
	},
};

export default card;