import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "プルリル",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "ベールの ような 手足で 獲物を 抱きかかえ ８０００メートルの 深海へと 引きずり込む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899896,
				tcgplayer: 709175,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [592],
};

export default card;
