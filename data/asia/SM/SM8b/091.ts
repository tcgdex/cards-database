import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Fairy"],

	description: {
		ja: "トレーナーの 明るい 気持ちが サイコパワーの 源。 楽しい 気分に なると クルクル 踊る。",
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
				cardmarket: 550951,
			},
		},
	],

	evolveFrom: {
		ja: "ラルトス",
	},

	retreat: 1,
	rarity: "None",
	dexId: [281],
};

export default card;
