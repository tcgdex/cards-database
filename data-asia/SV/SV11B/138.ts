import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "フシデ",
	},

	illustrator: "Apios",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [543],
};

export default card;
