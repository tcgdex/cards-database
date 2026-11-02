import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "タイム",
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "自分の手札からポケモンを1枚選び、そのポケモンの名前を相手に伝えてから、ウラにして置く。相手はそのポケモンのHPを答える。ウラにしたポケモンをオモテにして、正解なら、相手は山札を4枚引く。不正解なら、自分は山札を4枚引く。その後、置いたカードを自分の手札にもどす。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587877,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
