import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "古びたたての化石",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60の[C]タイプのたねポケモンとして、場に出せる。このカードは、特殊状態にならず、にげられない。自分の番の中でなら、場に出ているこのカードをトラッシュできる。グッズは、自分の番に何枚でも使える。 Ability: たてのまもり このポケモンがバトル場にいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888344,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Common",
};

export default card;
