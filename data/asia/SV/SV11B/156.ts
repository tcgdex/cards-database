import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タブンネ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "耳の 触角で 相手に 触れると 心臓の 音で 体調や 気持ちが わかるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おんがえし" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [531],

	thirdParty: {
		cardmarket: 829415,
		tcgplayer: 636510,
	},
};

export default card;
