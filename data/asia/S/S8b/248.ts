import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーマーガアV",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 30,
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "スカイハリケーン" },
			damage: 190,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スカイハリケーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587046,
				tcgplayer: 571500,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [823],
};

export default card;
