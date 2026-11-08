import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フタチマル",
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'ja-jp': "流れるような 太刀さばきで ２枚の ホタチを あつかう 技は 厳しい 修業によって 身につける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーシェル" },
			damage: "30x",
			cost: ["Water"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "ミジュマル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [502],
	thirdParty: {
		cardmarket: 829459,
		tcgplayer: 636656,
	},
};

export default card;
