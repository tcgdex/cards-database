import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルリナ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから[水]ポケモンと[水]エネルギーを合計4枚まで選び、相手に見せて、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597414,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
