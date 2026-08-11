import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "古びたはねの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	hp: 60, // This card has an HP due to its effect

	effect: {
		'ja-jp': "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。 自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
	},

	abilities: [
		{
			type: "Ability",
			name: { ja: "はねのまもり" },
			effect: {
				'ja-jp': "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージを受けない。",
			},
		},
	],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
	thirdParty: {
		cardmarket: 829084,
		tcgplayer: 636634,
	},
};

export default card;
