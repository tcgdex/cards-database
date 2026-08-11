import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカイフィールド",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーがベンチに出せるポケモンの数は、8匹になる。（このカードがトラッシュされたとき、ベンチに6匹以上いるプレイヤーは、ベンチが5匹になるまでポケモンをトラッシュする。トラッシュするのは、このカードの持ち主から。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 749922,
				tcgplayer: 692384,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Promo",
};

export default card;
