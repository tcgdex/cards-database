import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "化石採掘場",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から、名前に「古びた」とつくグッズを2枚まで選び、ベンチに出してよい。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888351,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
