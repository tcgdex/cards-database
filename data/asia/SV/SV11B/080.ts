import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたふたの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。 自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
	},

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふたのまもり" },
			effect: {
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",

	thirdParty: {
		cardmarket: 828629,
		tcgplayer: 636434,
	},
};

export default card;
