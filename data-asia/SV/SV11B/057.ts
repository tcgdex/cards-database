import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "フシデ",
	},

	illustrator: "okayamatakatoshi",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "かみついて 猛毒を 与える。 天敵の 大きな とりポケモンも 体が しびれて 動けなくなる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくをとばす" },
			cost: ["Colorless"],
			effect: { ja: "相手のバトルポケモンをどくにする。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [543],

	thirdParty: {
		cardmarket: 828538,
		tcgplayer: 636411,
	},
};

export default card;
