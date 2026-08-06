import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "しっぽの 内部が モーターのように 回ると 何本もの 稲妻が 発生して 周囲を つらぬく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ワイルドショック" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586934,
				tcgplayer: 571447,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [644],
};

export default card;
