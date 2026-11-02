import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのピッピ人形",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP30の無色タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、バトル場に出ているこのカードを山札の下にもどしてよい。（ついているカードは、すべてトラッシュする。）このカードは、にげられない。このカードがきぜつしても、相手はサイドをとれない。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555336,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
