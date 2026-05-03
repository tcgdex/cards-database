import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マチスの取引",
	},

	illustrator: "osare",
	category: "Trainer",

	effect: {
		ja: "「おたがいのプレイヤーは、それぞれサイドを1枚とる。」をのぞむか、相手にたずねる。相手がのぞむなら、おたがいのプレイヤーは、それぞれサイドを1枚とる。のぞまないなら、自分は山札を4枚引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",

	thirdParty: {
		cardmarket: 840385,
		tcgplayer: 647199,
	},
};

export default card;