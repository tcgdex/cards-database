import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーマーガアVMAX",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ラスターボディ" },
			effect: {
				'ja-jp': "このポケモンは、相手のポケモンから特性の効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キョダイハリケーン" },
			damage: 240,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「キョダイハリケーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587047,
				tcgplayer: 571501,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アーマーガアV",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [823],
};

export default card;
