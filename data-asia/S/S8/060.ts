import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッスグマ",
		'zh-tw': "伽勒爾 直衝熊",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "とても 好戦的な 性質。 自分より 格上の 相手にも 平気で 挑む むこうみず。",
		'zh-tw': "有著十分好戰的性情。即使是比自己強的對手也會魯莽地發起挑戰。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "うしろげり",
				'zh-tw': "後踢",
			},
			damage: 30,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575615,
				tcgplayer: 569561,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル ジグザグマ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [264],
};

export default card;
