import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ジプソ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「基本[M]エネルギー」を2枚まで選び、自分の[M]ポケモン1匹につける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877364,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
