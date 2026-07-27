import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "シビビール",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "相手に 巻きつき まるい はん点から 電気を 流して しびれたところを まるかじりする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こものぐい" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの最大HPが「100」以上なら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561016,
			},
		},
	],

	evolveFrom: {
		ja: "シビシラス",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [603],
};

export default card;
