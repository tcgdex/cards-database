import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "野盗三姉妹",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の山札を上から5枚見て、その中からグッズを好きなだけ選び、トラッシュする。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657066,
				tcgplayer: 570750,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
