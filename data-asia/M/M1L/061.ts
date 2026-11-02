import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マチスの取引",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "「おたがいのプレイヤーは、それぞれサイドを1枚とる。」をのぞむか、相手にたずねる。相手がのぞむなら、おたがいのプレイヤーは、それぞれサイドを1枚とる。のぞまないなら、自分は山札を4枚引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 840356,
		tcgplayer: 647170,
	},
};

export default card;