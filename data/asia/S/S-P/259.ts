import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サマヨール",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "体の 中は 空っぽ。 口を 開けると ブラックホールの ように なんでも 吸いこんでしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あんこく" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605834,
				tcgplayer: 597432,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヨマワル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [356],
};

export default card;
