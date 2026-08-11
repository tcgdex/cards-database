import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたはねの化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60の[C]タイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。自分の番の中でなら、場に出ているこのカードをトラッシュできる。 Ability: はねのまもり このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージを受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863959,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
