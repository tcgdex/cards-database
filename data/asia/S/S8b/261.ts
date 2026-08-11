import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サイトウ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から5枚トラッシュし、その中にあるエネルギーをすべて、ベンチの[闘]ポケモンに好きなようにつける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587059,
				tcgplayer: 571513,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
