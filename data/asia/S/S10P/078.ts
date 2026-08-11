import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ザクロ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "この番、自分の[F]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。自分の番に、自分の手札（「ザクロ」をのぞく）を2枚トラッシュするなら、この「ザクロ」を自分のトラッシュから、相手に見せて、手札に加える。（この効果は、自分の番に使えるサポートの枚数にふくまない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651341,
				tcgplayer: 569921,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
