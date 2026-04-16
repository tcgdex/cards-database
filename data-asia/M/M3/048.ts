import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "ガス状の 舌で なめられると 魂を 取られてしまう。 闇に 隠れて 獲物を 狙う。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "のろう"}, "cost": ["Darkness"], "effect": {"ja": "相手のバトルポケモンに、ダメカンを3個のせる。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [93],

	thirdParty: {
		cardmarket: 867970,
		tcgplayer: 674367,
	},
};

export default card;