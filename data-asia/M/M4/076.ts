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
		ja: "自分のトラッシュから「基本「Metal」エネルギー」を2枚まで選び、自分の「Metal」ポケモン1匹につける。\nサポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	rarity: "Uncommon",
	regulationMark: "I",
};

export default card;
