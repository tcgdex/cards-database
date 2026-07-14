import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "サビ組のしたっぱ",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。相手の場のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [{ type: "holo" }],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 888655,
	},
};

export default card;
