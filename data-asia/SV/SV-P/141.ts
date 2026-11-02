import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "スカイフィールド",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーがベンチに出せるポケモンの数は、8匹になる。（このカードがトラッシュされたとき、ベンチに6匹以上いるプレイヤーは、ベンチが5匹になるまでポケモンをトラッシュする。トラッシュするのは、このカードの持ち主から。）",
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
