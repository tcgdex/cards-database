import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
		'zh-tw': "猴怪",
		'zh-cn': "猴怪",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "木の上で 群れをつくって 暮らす。 群れから はぐれた マンキーは 寂しくて すぐに 怒りだす。",
		'zh-tw': "在樹上群居的寶可夢。 和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
		'zh-cn': "在樹上群居的寶可夢。 和夥伴走散的猴怪會因為 按捺不住寂寞而動不動就生氣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "けりつける",
				'zh-tw': "踹",
				'zh-cn': "踹",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821877,
				tcgplayer: 628686,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [56],
};

export default card;
