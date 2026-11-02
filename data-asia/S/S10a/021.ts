import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴース",
		'zh-tw': "鬼斯",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "ガスから 生まれた 生命体。 毒を含んだ ガスの 体に 包まれると だれでも 気絶する。",
		'zh-tw': "從氣體中誕生的生命體。若被牠那有毒氣體形成的身體裹住， 不管是誰都會昏迷。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっそりのせる",
				'zh-tw': "無聲加害",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを1個のせる。",
				'zh-tw': "在對手的戰鬥寶可夢身上放置1個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656320,
				tcgplayer: 570684,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577105,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Common",
	dexId: [92],
};

export default card;
