import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "巨大なカマド",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札を1枚トラッシュしてよい。その場合、自分の山札にある[炎]エネルギーを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555112,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
