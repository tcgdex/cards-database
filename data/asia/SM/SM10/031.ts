import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴース",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "墓場で 発生する ガスに 怨念が 宿るうち やがて ポケモンに なったと いわれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スモッグ" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557386,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [92],
};

export default card;
