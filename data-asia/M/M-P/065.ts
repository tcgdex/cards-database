import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルドラゴンエネルギー",
	},

	illustrator: "5ban Graphics",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは[竜]ポケモンにしかつけられず、ついているかぎりすべてのタイプのエネルギー2個ぶんとしてはたらく。（このカードが[竜]ポケモン以外についているなら、トラッシュする。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864277,
				tcgplayer: 684572,
			},
		},
	],

	rarity: "Promo",
};

export default card;
