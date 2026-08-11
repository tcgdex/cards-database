import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "せせらぎの丘",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札にある[水]または[闘]タイプのたねポケモンを1枚、ベンチに出してよい。その場合、山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558493,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "A",
	rarity: "Secret Rare",
};

export default card;
