import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グリ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのポケモン全員のHPを、それぞれ「50」回復する。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Promo",
};

export default card;
