import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "普段は 土の中に 棲んでいる。 地中を 時速８０キロで 掘りながら エサを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899940,
				tcgplayer: 709190,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "Common",
	dexId: [95],
};

export default card;
