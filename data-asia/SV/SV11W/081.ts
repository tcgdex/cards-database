import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたはねの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60のタイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。 自分の番の中でなら、場に出ているこのカードをトラッシュできる。",
	},

	abilities: [
		{
			type: "Ability",
			name: { ja: "はねのまもり" },
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージを受けない。",
			},
		},
	],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
