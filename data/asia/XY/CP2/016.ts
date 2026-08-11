import { Card } from "models/database/card";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マーイーカ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'ja-jp': "光の 点滅で 襲ってきた 敵の 戦意を なくしてしまう。 その すきに 姿を くらますのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれかいてん" },
			damage: "10×",
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563497,
				tcgplayer: 605341,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [686],
};

export default card;
