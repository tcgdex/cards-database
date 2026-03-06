import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "デンチュラ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "敵に 襲われると 電気を 帯びた 糸を たくさん 吐き出して 電気の バリアを 作る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほうでん" },
			damage: "50x",
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		ja: "バチュル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [596],
	thirdParty: {
		cardmarket: 829033,
		tcgplayer: 636584,
	},
};

export default card;
