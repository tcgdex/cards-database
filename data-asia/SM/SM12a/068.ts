import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "バルキー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "いつでも 元気いっぱい。 強くなるため 負けても 負けても 相手に 立ち向かっていく。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "わんぱくキック" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。コインを1回投げオモテなら、相手のポケモン1匹に、ダメカンを3個のせる。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543901,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "None",
	dexId: [236],
};

export default card;
