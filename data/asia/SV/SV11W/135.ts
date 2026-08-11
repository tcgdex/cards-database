import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "レパルダス",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "神出鬼没な ポケモン。 美しい スタイルと 毛並みが 多くの トレーナーを ひきつける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はたきおとす" },
			damage: 50,
			cost: ["Darkness"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "チョロネコ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [510],
	thirdParty: {
		cardmarket: 829494,
		tcgplayer: 636688,
	},
};

export default card;
