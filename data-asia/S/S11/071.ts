import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒドイデ",
		'zh-tw': "好壞星",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "棘に 刺されると まず 痺れに 襲われ やがて 掻きむしりたくなる ほどの 痒みに 苦しむのだ。",
		'zh-tw': "要是被牠的毒刺給刺中，首先會發麻，接著會奇癢無比， 讓人恨不得把皮都給抓爛。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どくばり",
				'zh-tw': "毒針",
			},
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667946,
				tcgplayer: 570002,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [747],
};

export default card;
