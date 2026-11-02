import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "コクーン",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "自分では ほとんど 動けないが 危ないときは 硬くなって 身を守っているようだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふえる" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札にある「コクーン」を3枚まで、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560247,
			},
		},
	],

	evolveFrom: {
		ja: "ビードル",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [14],
};

export default card;
