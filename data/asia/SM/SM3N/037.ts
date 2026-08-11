import { Card } from "models/database/card";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キルリア",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		'ja-jp': "トレーナーの 明るい 気持ちが サイコパワーの 源。 楽しい 気分に なると クルクル 踊る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひらてうち" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "マジカルショット" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561037,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ラルトス",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [281],
};

export default card;
