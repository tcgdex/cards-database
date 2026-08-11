import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムックル",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "むしポケモンを ねらって 野山を 大勢の 群れで 飛び回る。 鳴き声が とても やかましい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かぎづめ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605837,
				tcgplayer: 597435,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [396],
};

export default card;
