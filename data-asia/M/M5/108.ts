import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミの元気",
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		ja: "このカードを使ったなら、自分の番は終わる。自分の山札から「基本[W]エネルギー」を4枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
	},

	variants: [{ type: "holo" }],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",

	thirdParty: {
		cardmarket: 888653,
	},
};

export default card;
