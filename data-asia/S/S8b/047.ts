import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ビリリダマ",
		'zh-tw': "霹靂電球",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "発電所などに 現れる。 モンスターボールと 間違えて 触って しびれる 人が 多い。",
		'zh-tw': "會出現在發電廠等地方。很多人會把牠錯當成精靈球去觸碰而被電麻。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エレキボール",
				'zh-tw': "電球",
			},
			damage: 40,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586563,
				tcgplayer: 571300,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578378,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [100],
};

export default card;
