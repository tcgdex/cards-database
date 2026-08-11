import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメイル",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'ja-jp': "４本の ツノは 高性能の レーダー。 耳や 鼻の かわりに 音や においを 感じ取る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 70,
			cost: ["Water", "Psychic"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876964,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌメラ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [705],
};

export default card;
