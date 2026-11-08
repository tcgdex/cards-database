import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バトルコンプレッサー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から好きなカードを3枚まで選び、トラッシュする。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	rarity: "Promo",
};

export default card;
